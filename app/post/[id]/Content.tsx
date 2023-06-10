 'use client'
import React, { useState} from 'react'
import { FormattedPost } from '@/app/types'

type Props = {
    post: FormattedPost;
};

const Content = ({post}: Props) => {
    const [isEditable, setisEditable] = useState<boolean>(false);

    const [title, setTitle] = useState<string>(post.title);
    const [titleError, setTitleError] = useState<string>("");
 
     const [content, setContent] = useState<string>(post.content);
     const [contentError, setContentError] = useState<string>("");

  return (
    <div>
        
        <h4 >
            {`Home > ${post.category} > ${post.title}`}
        </h4>
    </div>
  )
}

export default Content