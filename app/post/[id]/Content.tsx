 'use client'
import React, { useState} from 'react'
import { FormattedPost } from '@/app/types'
import Image from 'next/image';
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CategoryAndEdit from './CategoryAndEdit';
import Article from './Article';


type Props = {
    post: FormattedPost;
};



const Content = ({ post }: Props) => {
    const [isEditable, setisEditable] = useState<boolean>(false);

    const [title, setTitle] = useState<string>(post.title);
    const [titleError, setTitleError] = useState<string>("");
    const [tempTitle, setTempTitle] = useState<string>(title);
 
     const [content, setContent] = useState<string>(post.content);
     const [contentError, setContentError] = useState<string>("");
     const [tempContent, setTempContent] = useState<string>(content);
      
    const date = new Date(post?.createdAt);
    const options = { year: "numeric", month: "long", day: "numeric" } as any;
    const formattedDate = date.toLocaleDateString("en-US", options);

     const handleIsEditable = (bool: boolean) =>{
        setisEditable(bool);
        editor?.setEditable(bool);
     }

     const handleOnChangeContent = ({editor} : any) =>{
        if(!(editor as Editor).isEmpty) setContentError("");
        setContent((editor as Editor).getHTML()); 
     }

     const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        if(title) setTitleError("");
        setTitle(e.target.value);
     }

     const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        content: content,
        onUpdate: handleOnChangeContent,
        editorProps:{
          attributes:{
            class: "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full"
          }
        },
        editable : isEditable,
      })
  
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    // Validation Checks
    if(title === "") setTitleError("This field is required")
    if(editor?.isEmpty) setContentError("This field is required")
    if(title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
      {
        method : "PATCH",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      }
    );
    const data = await response.json();

    handleIsEditable(false);
    setTempTitle("");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  return (
    <div className='prose w-full max-w-full mb-10'>
    {/* {indication} */}
    <h5 className='text-wh-300' >
        {`Home > ${post.category} > ${post.title}`}
    </h5>

    {/* {Category and Edit } */}
    <CategoryAndEdit
       isEditable = {isEditable}
       handleIsEditable = {handleIsEditable}
       title={title}
       setTitle={setTitle}
       tempTitle={tempTitle}
       setTempTitle={setTempTitle}
       tempContent={tempContent}
       setTempContent={setTempContent}
       editor={editor}
        post={post}
    />

        <form onSubmit={handleSubmit}>
            {/* {header} */}
           <>
           {isEditable ? (
             <div>
                <textarea
                className='border-2 rounded-md bg-wh-50 p-3 w-full'
                placeholder='Title'
                onChange={handleOnChangeTitle}
                value={title}
               />
               {titleError && <p className='mt-1 text-wh-500'>{titleError}</p>}
             </div>
           ):(<h3 className='font bold text-3xl mt-3'>{title}</h3>)}
           <div className='flex gap-3'>
            <h5 className='text-xs font-semibold'>{post.author}</h5>
            <h6 className='text-xs text-wh-300'>{formattedDate}</h6>

           </div>
           </>
         

           <div className='relative w-auto mt-2 mb-16 h-96'>
            <Image 
            fill
            alt={post.title}
            src={post.image}
            sizes="(max-width: 480px) 100vw,
            (max-width: 768px) 85vw,
            (max-width: 1060px) 75vw,
            60vw"
            style={{objectFit: "cover"}}
            />
           </div>

           <Article 
           contentError={contentError}
           editor={editor}
           isEditable={isEditable}
           setContent={setContent}
           title={title}
           />


           {/* {submit button} */}

           {isEditable && (
            <div className='flex justify-end'>
                <button type='submit' className='bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5'>
                    SUBMIT
                </button>
            </div>
           )}
        </form>
    </div>
  )
}

export default Content
