import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 5px;
  background-color: teal;
  color: white;
  display: flex;
  align_items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  ${mobile({ fontSize: "10px" })}
`;

export const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Above $50</Container>;
};

export default Announcement;
