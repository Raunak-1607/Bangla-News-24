
import AllNews from "./Components/AllNews";
import MainNews from "./Components/MainNews";
import MostRead from "./Components/MostRead";

const Home =async()=> {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const latestNews = sections[0].articles;
  const allNews = sections.articles;
  const mainNews = sections[0].articles[0];
  console.log(sections);

  return (
   <div className="container mx-auto grid grid-cols-3 gap-8 mt-4">
    {/* Main News */}
      <div className="col-span-2 ">

        
          <MainNews mainNews={mainNews} latestNews={latestNews} />
          
        
        <AllNews sections={sections} />
      </div>

      {/* Most read */}
      <div className="col-span-1 ">
        <MostRead/>
      </div>
   </div>
  );
}
export default Home;
