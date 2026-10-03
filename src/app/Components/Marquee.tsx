import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface MarqueeProps {
    title: string;
}

const Marquee = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news");
    const data = await res.json();
    const topNews = data.data;
    // console.log(topNews);
    return (
        <div className=" bg-red-500 mt-2">
        <div className="container mx-auto flex  "> 
          <h1 className="py-2 px-3 bg-red-800 text-white rounded-3xl">সর্বশেষ</h1>
          <MarqueeText direction="right" duration={12} className=" bg-red-500 text-white py-2">


            {
                topNews.slice(0,10).map((tp: MarqueeProps, i:number)=> <span key={i}  ><span className="mx-2"> •</span> <span className="mx-2">{tp.title}</span></span>)
            }
          </MarqueeText>
         
        </div>

        </div>
    );
};

export default Marquee;