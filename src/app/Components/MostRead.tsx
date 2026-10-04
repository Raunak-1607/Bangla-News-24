import Link from "next/link";

interface MostReadProps {
    title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data  = await res.json();
  const mostRead = data.data;
  return (
    <Link href={`/Details/${mostRead.id}`}>
    
    <div>
      <h1 className="font-bold mb-4">{mostRead[0]?.category}</h1>

      <ul className="flex flex-col gap-5">
        {mostRead.map((mr: MostReadProps, i: number) => (
          <li key={i}>
            <span className="text-red-500 text-[18px] ">{i + 1}.</span> <span className="ml-2">{mr.title}</span>
          </li>
        ))}
      </ul>
    </div>
    </Link>
  );
};

export default MostRead;
