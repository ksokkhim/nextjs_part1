
"use client"

import { useEffect, useState } from "react"
import { use } from "react"

interface Post {
  id: number,
  title: string,
  body: string,
  reactions: {
    likes: number,
    dislikes: number
  }
}

export default function ProfileDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    async function getPost() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/posts/${id}`)
      const data = await res.json()
      setPost(data)
    }
    getPost()
  }, [id])

  if (!post) return <p>Loading...</p>

  return (
    <div className="grid place-items-center">
      <div className="p-4 max-w-md ">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    
    <div className="p-6">
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        {post.title}
      </h1>
      <p className="leading-relaxed mb-3">
        {post.body}
      </p>
      <div className="flex items-center flex-wrap">
        
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10C8.28283 8.32595 11.3995 5.54014 13.8271 1.64258C14.1784 1.07865 14.9676 0.967672 15.4374 1.43746L16.0265 2.02648C16.313 2.31302 16.3983 2.74415 16.2424 3.1182L14 8.50003H21.1257C22.3661 8.50003 23.3073 9.61747 23.0966 10.8398L21.2862 21.3398C21.1208 22.2991 20.2888 23 19.3153 23H10L6 20.5" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8H1V22H6V8Z" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          {post.reactions.likes}
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm ">
          <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.126 14.1433C15.8432 15.8174 12.7265 18.6032 10.2988 22.5008C9.94757 23.0647 9.15833 23.1757 8.68854 22.7059L8.09952 22.1169C7.81298 21.8304 7.7277 21.3992 7.88355 21.0252L10.126 15.6433L3.00031 15.6433C1.75991 15.6433 0.81864 14.5259 1.02939 13.3035L2.83974 2.80353C3.00513 1.84423 3.8372 1.14334 4.81066 1.14334H14.126L18.126 3.64334" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.126 16.1434H23.126V2.14337H18.126V16.1434Z" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          {post.reactions.dislikes}
        </span>
      </div>
    </div>
  </div>
</div>
    </div>

  )
}