import { EditBlogModal } from "@/components/editBlogModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type TBlog = {
    _id: string;
    title: string;
    content: string;
    date: string;
    tags: string[];
    author: string;
};

const Blog = ({
    blog,
    onDeleteSuccess,
}: {
    blog: TBlog;
    onDeleteSuccess?: (id: string) => void;
}) => {
    const [loading, setLoading] = useState(false);
    const { _id, author, content, date, tags, title } = blog;

    // ! handle delete blog
    const handleDelete = async (id: string) => {
        const confirmDelete = confirm(
            "Are you sure you want to delete this post?"
        );
        if (!confirmDelete) return;
        setLoading(true);

        try {
            const res = await fetch(
                `http://localhost:3000/api/v1/posts/${id}`,
                { method: "DELETE" }
            );
            if (res.ok) {
                console.log("Deleted successfully");
                onDeleteSuccess?.(id);
            } else {
                console.error("Failed to delete:", res.text());
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    // ! handle edit blog


    return (
        <div className="border-1 rounded-2xl p-5 flex flex-col gap-3 justify-center items-center">
            <p className="font-bold">Title: {title}</p>
            <p>Content: {content}</p>
            <p>Author: {author}</p>
            <p>Date: {date}</p>
            <div>
                {tags?.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-xl text-sm mx-2"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
            <div className="flex justify-between items-center gap-3">
                <Button
                    className="m-auto my-2 cursor-pointer"
                    onClick={() => handleDelete(_id)}
                >
                    {loading ? "Deleting..." : "Delete"}
                </Button>
                <EditBlogModal id={_id}></EditBlogModal>

            </div>
        </div>
    );
};

export default Blog;
