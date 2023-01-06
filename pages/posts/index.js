import axios from "axios";
import React from "react";

const index = ({ data = [] }) => {
  return (
    <div>
      <div>This is posts page</div>

      <div className="mt-5">
        {data.map((item) => (
          <div key={item?.id} className="border-b">
            <div>{item?.name}</div>
            <div>{item?.episode}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;

export const getServerSideProps = async () => {
  // SSR
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");

  return {
    props: {
      data: data?.results,
    },
  };
};
