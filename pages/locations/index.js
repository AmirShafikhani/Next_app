import axios from "axios";
import React, { useEffect, useState } from "react";

const Locations = () => {
  // CSR
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/location"
      );

      setData(data?.results);
    };

    getData();
  }, []);

  return (
    <div>
      This is locations page
      <div className="mt-5">
        {data.map((item) => (
          <div key={item.id}>
            {item?.id} - {item?.name} - {item?.dimension}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
