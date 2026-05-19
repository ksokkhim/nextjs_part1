"use client"

import BlogComponent from "@/components/BlogComponent";
import { useEffect, useState } from "react"



export default function ProfilePage() {
    const [profile, setProfile] = useState([]);
    useEffect (() =>{
        async function getAllProfile(){
            const res = await fetch(process.env.NEXT_PUBLIC_BASIC_URL + '/posts');
            const data =  await res.json();
            setProfile(data?.posts)
            return data;
        }
        getAllProfile();

    },[]);
    console.log("===> profile:", profile)
    
  return (
    <div className="grid grid-cols-4 gap-4 p-8">
        {profile?.map(({title,body,id}) =>(
            <BlogComponent id={id}  key={id} title={title} body={body}/>
        ))}
    </div>
  )
}
