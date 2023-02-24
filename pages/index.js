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
          <Link href="/secure-page">Go to client side secured page</Link>
          <Link href="/server-secure-page">Go to server side secured page</Link>
          <Link href="/login">Go to login page</Link>

          {data ? <button onClick={() => signOut()}>sign out</button> : <button onClick={() => signIn()}>Sign in</button>}
        </div>
      )}
    </>
  );
};

export default Home;
