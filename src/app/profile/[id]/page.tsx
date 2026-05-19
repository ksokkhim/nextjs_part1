// app/profile/[id]/page.tsx

"use client"

import { useEffect, useState } from "react"
import { use } from "react"

interface Post {
  id: number
  title: string
  body: string
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
    <div className="max-w-xl mx-auto mt-10 px-6">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  )
}