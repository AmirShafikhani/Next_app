import axios from "axios";
import { data } from "browserslist";
import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return data?.results;
};

// Using swr hook without async await
// const fetcher = () => {
//     return axios.get("https://rickandmortyapi.com/api/character")
//     .then(res => res?.data?.results)
// }

const Characters = () => {
  const { data = [], isLoading, error } = useSWR("/characters", fetcher);

  return (
    <>
      {error ? (
        <div>error ...</div>
      ) : (
        <div>
          This is characters page
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <div className="mt-5">
              {data.map((item) => (
                <div key={item?.id} className="border-b p-3">
                  {item?.id} - {item?.name} - {item?.species}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Characters;
