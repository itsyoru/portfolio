import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Fawad's Portfolio
      </h1>
      <p className="mb-4">
        {`Welcome to my website! My name is Fawad and I'm a recent graduate with a BS in Computer Science.
        I'm currently looking for a Software Engineering role.
        
        Hire me?`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
