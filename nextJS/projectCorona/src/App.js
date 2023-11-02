import React, { Component } from "react";
import Menuutama from "./menuutama";
import Menuproduct from "./menuproduct";
import Menukontak from "./menukontak";
import Menutentangkami from "./menutantangkami";

class App extends Component{
  render(){
    return (
    <div>
          <h1>halaman ini untuk header</h1>

    <Menuutama />
      <Menuproduct />
        <Menukontak />
          <Menutentangkami />


    <h1>Halaman ini untuk footer</h1>
    </div>
  );
}
}

export default App;
