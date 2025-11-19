import { useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostStatic: Post[] = [
  { id: 1, title: "Post One", body: "This is the body of Post One" },
  { id: 2, title: "Post Two", body: "This is the body of Post Two" },
  { id: 3, title: "Post Three", body: "This is the body of Post Three" },
  { id: 4, title: "Post Four", body: "This is the body of Post Four" },
  { id: 5, title: "Post Five", body: "This is the body of Post Five" },
];

function PostList() {
  const [posts, setPosts] = useState<Post[]>(PostStatic);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div className="container mb-4">
      <h2 className="text-danger my-4">Post List</h2>

      <button className="btn btn-success mb-2" onClick={fetchPosts}>
        Fetch Posts{" "}
      </button>

      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h3 className="text-primary mb-2">{post.title}</h3>
            <p className="text-secondary">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostList;
