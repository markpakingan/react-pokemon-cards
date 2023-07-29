// useAxios.js file


import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useAxios = (baseURL, initialData) => {
  const [currentArray, setCurrentArray] = useState(initialData);

  const getData = async (name= " ") => {
    try {
      const response = await axios.get(`${baseURL}${name}`);
      const newData = {...response.data, id: uuid()}
      setCurrentArray((currentArray) => [...currentArray, newData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [currentArray, getData];
};

export default useAxios;
