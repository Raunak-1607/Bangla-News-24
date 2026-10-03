import React from 'react';
interface NavLinksProps {
    title: string;
    scrapable: boolean;
}
const NavLinks = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const catagories = data.data;
    
    const filteredCatgories = catagories.filter((c: NavLinksProps) => c.scrapable );
    
    return (
        <div className='flex gap-4 justify-center py-2 text-[14px] mt-3'>
            <h1>হোম</h1>
            { 
                
                filteredCatgories.map((c: NavLinksProps, i:number)=> <div key={i}>
                    <ul>

                    <li>{c.title}</li>
                    </ul>
                    
                    </div>)
            }
        </div>
    );
};

export default NavLinks;