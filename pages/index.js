import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Home = () => {
  const { data, status } = useSession();

  return (
    <>
      {status === "loading" ? (
        "loading"
      ) : (
        <div className="flex flex-col gap-2">
          <Link href="/shop">Go to shop page</Link>
          <Link href="/posts">Go to posts page</Link>
          <Link href="/locations">Go to locations page</Link>
          <Link href="/characters">Go to characters page</Link>
          <Link className={(e) => `${console.log(e)} bg-yellow`} href="/secure-page">Go to client side secured page</Link>

          {data ? (
            <button onClick={() => signOut()}>sign out</button>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
