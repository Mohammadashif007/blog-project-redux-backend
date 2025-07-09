// import { useEffect, useState } from "react";
import "./App.css";
import Table from "./pages/Table/Table";
// import { BlogModal } from "./components/blogModal";
// import Blog from "./pages/blog/blog";
// import { useGetPostsQuery } from "./redux/api/blogApi";

function App() {
    // const [blogs, setBlogs] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const {data, isLoading} = useGetPostsQuery(undefined);
    // console.log(data);
    // const blogs = data?.data;
    // const blogs: TBlog[] = data?.data || [];
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const res = await fetch("http://localhost:3000/api/v1/posts");
    //             const data = await res.json();
    //             setBlogs(data.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //         setLoading(false);
    //     };
    //     fetchData();
    // }, []);

    // const handleDeleteSuccessfully = (id: string) => {
    //     setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    // };

    return (
        <div>
            {/* <div className="mb-5 ">
                <BlogModal></BlogModal>
               
            </div>
            {isLoading ? (
                <p className="m-auto">Loading...</p>
            ) : (
                <div className="grid grid-cols-3 gap-3">
                    {blogs.map((b) => (
                        <Blog
                            key={b._id}
                            blog={b}
                            // onDeleteSuccess={handleDeleteSuccessfully}
                        ></Blog>
                    ))}
                </div>
            )} */}
            <Table></Table>
        </div>
    );
}

export default App;
