import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
  
    return (
      <div>
        <Nav/>
        <Footer/>
      </div>

      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox} />
        </Route>
      </Router>
    );
  }
}
