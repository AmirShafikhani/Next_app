export const readyData = (data, pickUpKey, shouldAccept = [], forceAcceptKey = []) => {
  const isTruthy = (value) => (shouldAccept.includes(value) ? true : value ? true : false);
  const isValid = (value, key) => {
    if (key) return forceAcceptKey.includes(key) ? true : isTruthy(value);
    else return isTruthy(value);
  };

  const isArray = (data) => Array.isArray(data);
  const isObject = (data) => typeof data === "object" && data !== null && !isArray(data);

  const arrayCheck = (array) => {
    const checked = array.reduce((prev, current) => {
      if (isObject(current)) {
        const result = objectCheck(current);
        return Object.entries(isNaN(result) ? result : result.toString()).length ? [...prev, result] : prev;
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
    if (pickUpKey && object[pickUpKey]?.toString()) return object[pickUpKey];
    const checked = Object.entries(object).reduce((prev, current) => {
      const [key, value] = current;
      if (isObject(value)) {
        const result = objectCheck(value);
        return Object.entries(isNaN(result) ? result : result.toString()).length ? { ...prev, [key]: result } : prev;
      } else if (isArray(value)) {
        const result = arrayCheck(value);
        return result.length ? { ...prev, [key]: result } : prev;
      } else {
        return isValid(value, key) ? { ...prev, [key]: value } : prev;
      }
    }, {});

    return checked;
  };

  return isObject(data) ? objectCheck(data) : isArray(data) ? arrayCheck(data) : isValid(data);
};
