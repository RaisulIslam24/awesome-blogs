const Category = ({ item }) => {
  return (
    <>
      <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl bg-white`}
          >
            { item.name }{" "}
            <span className={`px-[6px] py-1  rounded-lg ms-1 bg-[#EAECF0] h-[20px] `}>
              { item.total_blog }
            </span>
          </button>
        </div>
    </>
  );
};

export default Category;
