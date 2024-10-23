
export default async function DashBoard() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();

  return (
    <div className="">
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
