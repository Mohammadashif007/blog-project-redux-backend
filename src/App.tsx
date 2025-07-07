import "./App.css";
import { BlogModal } from "./components/blogModal";
import Blog from "./pages/blog/blog";
import { useGetPostsQuery } from "./redux/api/blogApi";

function App() {
    const { data, isLoading, error } = useGetPostsQuery(undefined);
    if (isLoading) return <p>Loading...</p>;
    const blogs = data.data;

    return (
        <div>
            <div className="mb-5 ">
                <BlogModal></BlogModal>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {blogs?.map((b) => (
                    <Blog key={b._id} blog={b}></Blog>
                ))}
            </div>
        </div>
    );
}

export default App;
