import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  render() {
    return (
        <div  class="row menu">
          <div class=" col s1 menubloc">
            <IndexLink to="/" >Home</IndexLink>       
          </div>
          <div class="col s1 menubloc">
            <Link to="./Intercalaire">Intercalaire</Link>
          </div>
          <div class="col s1 menubloc">
            <Link to="./Editeur">Editeur</Link>      
          </div>
          <div class="col s1 offset-s7">
              <img src="./img/picto-notif.png" alt=""/>
          </div>
          <div class=" col s1">
              <img src="./img/picto-profile.png" alt=""/>
          </div>
          {this.props.children}
        </div>

    );
  }
}
