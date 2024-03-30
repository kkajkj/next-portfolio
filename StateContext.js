"use client";
import axios from "axios";
import { createContext, useState, useEffect } from "react";
export const StateContext = createContext();

const StateProvider = (props) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      setData(response.data.user);
    } catch (error) {
      console.error("error fetching data :", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StateContext.Provider value={data}>{props.children}</StateContext.Provider>
  );
};

export default StateProvider;
