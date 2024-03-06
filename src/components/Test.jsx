import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://wardrobe-online-backend.vercel.app/api/products"
        );
        setData(res);
      } catch (err) {}
    };
    getProducts();
  }, []);
  console.log("testing deployment", data);
  return <div>Test</div>;
};

export default Test;
