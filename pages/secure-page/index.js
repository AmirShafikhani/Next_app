import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

// Client side page securing
const SecurePage = () => {
  const router = useRouter();

  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });

  return (
    <>
      {status === "loading" ? (
        <div>loading...</div>
      ) : ( 
        <>
          <div>This is a secured page using next auth</div>
          <h1 className="text-center text-3xl pt-12">Welcome {data?.user?.name}</h1>          
        </>
      )}
    </>
  );
};

export default SecurePage;
