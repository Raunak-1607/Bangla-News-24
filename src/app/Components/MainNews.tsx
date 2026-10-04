
import Image from "next/image";
import Link from "next/link";

interface MainNewsProps {
    imageUrl: string,
    imageAlt: string,
    title: string,
    description: string,
    lastPublished: string,
    id: string
}

const MainNews = ({ mainNews , latestNews }: { mainNews: MainNewsProps, latestNews: MainNewsProps[] }) => {

 const date = new Date(mainNews.lastPublished).toLocaleString("bn-BD", {
  dateStyle: "medium",
  timeStyle: "short",
});
  return (

    <Link href={`Details/${mainNews.id}`}>
    
    <div>
      <div className="flex gap-3">
        {/* Card */}
        <div className="card bg-base-100 w-150 shadow-sm">
          <figure>
            <Image src={mainNews.imageUrl} alt={mainNews.imageAlt} width={500} height={300} />
            
          </figure>
          <div className="card-body ">
            <p className="text-red-500 ">প্রধান খবর</p>
            <h2 className="card-title hover:text-red-500">{mainNews.title}</h2>
            <p className="text-[12px] text-[#525252]">
              {mainNews.description}
            </p>
            <div className="card-actions justify-end">
             <p className="text-[#6B6B6B] text-[10px]">{date}</p>
            </div>
          </div>
        </div>

        {/* Listed news */}
        <div className="flex flex-col  p-2">
           {
            latestNews.slice(1,6).map((ln,i:number)=> <div key={i} className="border py-4 px-2 border-gray-100">
                <p className="text-red-500">প্রধান খবর</p>
                <ul>
                    <li>{ln.title}</li>
                </ul>
            </div>)
           }
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MainNews;
