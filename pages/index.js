import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/shop">Go to shop page</Link>
      <Link href="/posts">Go to posts page</Link>
      <Link href="/locations">Go to locations page</Link>
      <Link href="/characters">Go to characters page</Link>
      <Link href="/signup">Go to Sign Up page</Link>
      <Link href="/login">Go to Login page</Link>
    </div>
  );
};

export default Home;
