import { blogType } from "@/lib/blog/blog-type";
import Image from "next/image";

export default function BlogComponent({profile, name, position}) {

    return(
        // jsx
        <div>

        <Image src={profile} alt="profile" width={50} height={50} loading="eager" />
        <hr />
        <h1>Name : {name}</h1>
        <h2>Position : {position}</h2>
        </div>
    )

}