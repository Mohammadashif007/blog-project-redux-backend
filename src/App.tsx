import { useEffect, useState } from "react";
import "./App.css";
import { BlogModal } from "./components/blogModal";
import Blog from "./pages/blog/blog";

function App() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch("http://localhost:3000/api/v1/posts");
                const data = await res.json();
                setBlogs(data.data);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleDeleteSuccessfully = (id: string) => {
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    }

    return (
        <div>
            <div className="mb-5 ">
                <BlogModal></BlogModal>
            </div>
            {loading ? (
                <p className="m-auto">Loading...</p>
            ) : (
                <div className="grid grid-cols-3 gap-3">
                    {blogs.map((b) => (
                        <Blog key={b._id} blog={b} onDeleteSuccess={handleDeleteSuccessfully}></Blog>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
