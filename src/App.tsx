import "./App.css";
import { useGetPostsQuery } from "./redux/api/blogApi";

function App() {
    const {data, isLoading, error } = useGetPostsQuery(undefined);
    if (isLoading) return <p>Loading...</p>;
    const blogs = data.data;

    return (
        <div>
            {blogs?.map((b) => <div>{b.title}</div>)}
        </div>
    );
}

export default App;
