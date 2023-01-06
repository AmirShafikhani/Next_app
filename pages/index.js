import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/shop">Go to shop page</Link>
      <Link href="/posts">Go to posts page</Link>
      <Link href="/locations">Go to locations page</Link>
    </div>
  );
};

export default Home;
