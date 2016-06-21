import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Intercalaire extends React.Component {
  render() {
  
    return (
      <div>
        <Nav/>
        <Footer/>
      </div>

    );
  }
}