import BlogComponent from '@/components/Blog/BlogComponent'
import { blogType } from '@/lib/blog/blog-type'
import { profile } from 'console'


export default function BlogPage() {
    // rendering many data passby props
    const blogs:blogType[] = [
        {profile: "https://i.pinimg.com/736x/36/f2/2d/36f22d33e7cf670793a300b9e33e0a29.jpg",
            name: "Caty Caty", 
            position: "Meow Saver"},
        {profile: "https://i.pinimg.com/736x/36/f2/2d/36f22d33e7cf670793a300b9e33e0a29.jpg",
            name: "Caty Caty", 
            position: "Meow Saver"},
        {profile: "https://i.pinimg.com/736x/36/f2/2d/36f22d33e7cf670793a300b9e33e0a29.jpg",
            name: "Caty Caty", 
            position: "Meow Saver"},
        

    ]
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 p-8">
        {
            blogs?.map(({profile, name, position}, _) => (
            <BlogComponent 
            key={_}
            profile={profile}
            name={name}
            position={position}/>
        ))
        }
        
    </div>
  )
}
