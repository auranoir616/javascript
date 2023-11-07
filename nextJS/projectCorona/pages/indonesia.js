import React from "react"
import IndexPage from "../components/Dashboard/IndexPage"
import fetch from "isomorphic-fetch";
const config = require("../config.json");

const Indonesia =({items}) => {

        return(
            <IndexPage isGlobal={false} response={items} />
            );
    };
    //!fetch data API
    export async function getServerSideProps() {
        const apiUrl = `${config["corona"].base_url}/negara/indonesia`;
        const response = await fetch(apiUrl);
        const items = await response.json();
        console.log(items)
      
        return {
          props: { items },
        };
      }

export default Indonesia
