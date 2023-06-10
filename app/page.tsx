import Trending from "./(home)/Trending"
import Tech from "./(home)/Tech"
import Travel from "./(home)/Travel"
import Other from "./(shared)/Other"
import Subscribe from "./(shared)/Subscribe"
import Sidebar from "./(shared)/Sidebar"
import { prisma } from "./api/client"
import { Post } from "@prisma/client"

export const revalidate = 60; // revalidate this page every 60 seconds


const getPosts = async() =>{
  const posts = await prisma.post.findMany();

  return posts;
}

export default async function Home(){
  const posts = await getPosts();
 
  const formatPosts = () =>{
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) =>{
      if(i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech"){
        techPosts.push(post);
      } else  if (post?.category === "Travel"){
        travelPosts.push(post);
      } else  if (post?.category === "Interior Design"){
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <main className="px-10 leading-7">
     <Trending trendingPosts={trendingPosts}/>
     <div className="md:flex gap-10 mb-5">
      <div className="basis-3/4">
       <Tech techPosts={techPosts} />
      <Travel travelPosts={travelPosts} />
      <Other otherPosts={otherPosts} />
      <div className="hidden md:block">
        <Subscribe />
      </div>
      </div>
      <div>
      <Sidebar />
     </div>
     </div> 
    </main>
  )
}