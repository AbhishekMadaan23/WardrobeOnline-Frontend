import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Success = () => {
  const location = useLocation();
  console.log("location", location);
  return <div>Success</div>;
};

export default Success;
