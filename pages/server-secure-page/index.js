import { getSession, signIn, useSession } from "next-auth/react";
import React from "react";

// Server side securing pages using next auth
const ServerSecurePage = () => {
  const { data, status } = useSession();

  //  in SSR securing you can navigate the user in getServerSideProps or like this :
  //   return (
  //     <>
  //       {status === "loading" ? (
  //         <div>Loading ...</div>
  //       ) : status === "authenticated" ? (
  //         <div className="text-2xl">Welcome to SSR secured page, {data?.user?.name}</div>
  //       ) : (
  //         <div>
  //           <div>you should sign in first</div>
  //           <button onClick={() => signIn()}>Go to sign in page</button>
  //         </div>
  //       )}
  //     </>
  //   );

  return (
    <>
      {status === "loading" ? (
        <div>Loading ...</div>
      ) : (
        <div className="text-2xl">Welcome to SSR secured page, {data?.user?.name}</div>
      )}
    </>
  );
};

export default ServerSecurePage;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/server-secure-page",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session,
    },
  };
};
