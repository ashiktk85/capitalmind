import posts from "@/data/Posts";


const LatestPosts = () => (
    <section className="mt-8">
      <h2 className="font-semibold text-md mb-4">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        {posts.map((post, idx) => (
          <div key={idx}>
            <p className="text-xs text-gray-400 mb-1">{post.date}</p>
            <h3 className="font-medium text-base mb-1">{post.title}</h3>
            <p className="text-[13px] text-gray-600 mb-1">{post.description}</p>
            <a className="text-green-600 text-xs font-semibold hover:underline" href={post.link}>Read full post</a>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
      <a
        href="/posts"  
        className="inline-block bg-green-600 text-white text-sm font-semibold py-2 px-6 rounded hover:bg-green-700 transition-colors"
      >
        Show more
      </a>
    </div>
    </section>
  );
  

export default LatestPosts;
