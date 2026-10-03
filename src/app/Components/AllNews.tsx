import React from "react";
import Image from "next/image";

const AllNews = ({ sections }) => {
  const filteredNews = sections.filter(
    (news) =>
      news.title !== "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!" &&
      news.title !== "সামাজিক মাধ্যমে বিবিসি বাংলা" &&
      news.title !== "বিবিসি বাংলা এখন ইন্সটাগ্রামে!" &&
      news.title !== "প্রধান খবর" &&
      news.title !== "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!"
  );

  return (
    <div className="space-y-10">
      {filteredNews.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          
          {/* Section Heading */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-black mb-3">
              {section.title}
            </h2>

            {/* Red Line */}
            <div className="w-full h-[2px] bg-red-500"></div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {section.articles.map((article, articleIndex) => {
              const date = new Date(
                article.lastPublished
              ).toLocaleString("bn-BD", {
                dateStyle: "medium",
                timeStyle: "short",
              });

              return (
                <div
                  key={`${sectionIndex}-${articleIndex}`}
                  className="card bg-base-100 shadow-sm"
                >
                  <figure>
                    <Image
                      src={article.imageUrl}
                      alt={article.imageAlt}
                      width={500}
                      height={300}
                      className="w-full h-56 object-cover"
                    />
                  </figure>

                  <div className="card-body">
                    <p className="text-red-500">
                      {section.title}
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
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default AllNews;