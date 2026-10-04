import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default async function NavLinksPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);
    
    if (!res.ok) {
        return <div className="text-center mt-10 text-red-500">Error: Could not fetch category "{id}".</div>;
    }

    const text = await res.text();
    let data;
    try {
        data = JSON.parse(text);
    } catch (e) {
        console.error("Failed to parse category JSON. Response was:", text.substring(0, 200));
        return <div className="text-center mt-10 text-red-500">Error parsing category data for "{id}"</div>;
    }
    
    const categoryNews = data.data || [];

    return (
        <div className="space-y-10 mt-8 container mx-auto">
            {/* Section Heading */}
            <div className="mb-4">
                <h2 className="text-xl font-bold text-black mb-3">
                    {data.title || "Category"}
                </h2>

                {/* Red Line */}
                <div className="w-full h-[2px] bg-red-500"></div>
            </div>

            {/* Articles Grid - Moved OUTSIDE the map so all cards share the same grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryNews.map((article: any, index: number) => {
                    const date = new Date(
                        article.lastPublished
                    ).toLocaleString("bn-BD", {
                        dateStyle: "medium",
                        timeStyle: "short",
                    });

                    return (
                        <Link href={`/Details/${article.id}`} key={index} className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
                            <figure>
                                <Image
                                    src={article.imageUrl}
                                    alt={article.imageAlt || article.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-56 object-cover"
                                />
                            </figure>

                            <div className="card-body">
                                <p className="text-red-500">
                                    {article.category}
                                </p>

                                <h2 className="card-title hover:text-red-500">
                                    {article.title}
                                </h2>

                                <p className="text-[12px] text-[#525252]">
                                    {article.description}
                                </p>

                                <div className="card-actions justify-end">
                                    <p className="text-[#6B6B6B] text-[10px]">
                                        {date}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}