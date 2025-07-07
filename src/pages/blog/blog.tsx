const Blog = ({ blog }) => {
    const { author, content, date, tags, title } = blog;
 
    return (
        <div className="border-1 rounded-2xl p-5 flex flex-col gap-3 justify-center items-center">
            <p className="font-bold">Title: {title}</p>
            <p>Content: {content}</p>
            <p>Author: {author}</p>
            <p>Date: {date}</p>
            <div>
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-xl text-sm mx-2"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Blog;
