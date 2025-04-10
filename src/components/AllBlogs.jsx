import { useEffect, useState } from "react";
import Category from "./Category";

const AllBlogs = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
          fetch('https://hr.mediusware.xyz/api/website/blogs/categories/')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching data:', error));
        }, []);

  return (
    <div className="container">
      <div className="flex items-center justify-between gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
        <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl text-white bg-[#0060AF]  `}
          >
            All{" "}
          </button>
        </div>
        {categories?.map(item => <Category key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default AllBlogs;
