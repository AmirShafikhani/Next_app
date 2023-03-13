import React, { useEffect } from "react";

const arrayData = [
  { title: 1, test: null },
  { title: 2 },
  { title: 3 },
  { title: 4 },
  null,
  [{ test: 115 }, [null, { test5: 1 }]],
];

const Ready = () => {
  const readyData = (data) => {
    const isValid = (value, key) => (value ? true : false);

    const isArray = (data) => Array.isArray(data);
    const isObject = (data) => typeof data === "object" && data !== null && !Array.isArray(data);

    const arrayCheck = (array) => {
      const checked = array.reduce((prev, current) => {
        if (isObject(current)) {
          const result = objectCheck(current);
          return Object.entries(result).length ? [...prev, result] : prev;
        } else if (isArray(current)) {
          const result = arrayCheck(current);
          return result.length ? [...prev, result] : prev;
        } else {
          return isValid(current) ? [...prev, current] : prev;
        }
      }, []);

      return checked;
    };

    const objectCheck = (object) => {
      const checked = Object.entries(object).reduce((prev, current) => {
        const [key, value] = current;
        if (isObject(value)) {
          const result = objectCheck(value);
          return Object.entries(result).length ? { ...prev, [key]: result } : prev;
        } else if (isArray(value)) {
          const result = arrayCheck(value);
          return result.length ? { ...prev, [key]: result } : prev;
        } else {
          return isValid(value, key) ? { ...prev, [key]: value } : prev;
        }
      }, {});

      return checked;
    };

    const result = Object.entries(data).reduce(
      (prev, current) => {
        if (isObject(data)) {
          const checkedObject = objectCheck(data);
          // console.log(checkedObject);
        }

        if (isArray(data)) {
          const checkedArray = arrayCheck(data);
          console.log(checkedArray);
        }

        return prev;
      },
      isArray(data) ? [] : {}
    );

    return result;
  };

  useEffect(() => {
    readyData(arrayData);
  }, []);

  return <></>;
};

export default Ready;
