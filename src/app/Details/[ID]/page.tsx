import React from 'react';

const DetailsPage = async({params}) => {
    const {ID} = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${ID}`);
    const data = await res.json();
    const news = data.data;
    console.log(news);
    return (
        <div className='max-w-[840px] mx-auto px-4 pt-8 pb-16'>
            <h1 className="text-3xl font-bold">{news.title}</h1>
            <p className="text-[18px] leading-[1.7] text-[#525252] line-clamp-2">{news.body[2].text}</p>
        </div>
    );
};

export default DetailsPage;