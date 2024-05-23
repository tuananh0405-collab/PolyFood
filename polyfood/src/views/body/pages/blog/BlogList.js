import BlogCard from "./BlogCard";

const BlogList = ({ blogData }) => {
    return (
      <div className="BlogList flex flex-wrap items-center justify-center pt-10 pb-10 gap-6">
        {blogData.map((blogCard, index) => {
          return (
            <BlogCard
              key={index}
              time={blogCard.time}
              name={blogCard.name}
              title={blogCard.title}
              image={blogCard.image}
            />
          );
        })}
      </div>
    );
  };
  
  export default BlogList;
  