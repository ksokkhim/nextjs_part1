import Link from "next/link";

interface BlogType{
  id: number,
    title : string,
    body: string,
    reactions:number
    
}

export default function BlogComponent({id,title, body,reactions}: BlogType){
    return(
        <div className="flex px-3 py-3">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    
    <div className="px-6 py-4">
      <Link href = {`/profile/${id}`}>
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {body}
      </p>
      </Link>
    </div>
    {/* <div className="px-6 py-4"> */}
      {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        {tags}
      </span> */}
      {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #travel
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        #winter
      </span> */}
    {/* </div> */}
  </div>
</div>

    )
   
}