import React from "react";
import IndexPage from "../components/Dashboard/IndexPage";
import fetch from "isomorphic-fetch";
const config = require("../config.json");

const Index = ({ items }) => {
  return (
      <IndexPage isGlobal={true} response={items} />
  );
};
//! fetch data API
export async function getServerSideProps() {
  const apiUrl = config["corona"].base_url;
  const response = await fetch(apiUrl);
  const items = await response.json();

  return {
    props: { items },
  };
}

export default Index;
