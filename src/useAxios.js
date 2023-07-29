// // useAxios.js file


import { useState } from "react";
import axios from "axios";

const useAxios = (url, initialData) => {
  const [currentArray, setCurrentArray] = useState(initialData);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setCurrentArray((currentArray) => [...currentArray, { ...response.data }]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [currentArray, getData];
};

export default useAxios;
