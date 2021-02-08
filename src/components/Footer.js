import React from "react";
import { Link } from "gatsby";

import Icon from "./Icon";

export default function Footer() {
  return (
    <footer>
      <div className="bg-black py-20">
        <div className="container text-white">
          <div style={{ maxWidth: "200px" }} className="mb-12">
            <Icon name="logo" />
          </div>
          <div className="lg:grid lg:grid-cols-12">
            <address className="lg:col-span-4 ">
              {/* {address.street} */}
              1198 65th Street
              <br></br>
              {/* {address.street2 && ( */}
              <>
                {/* {address.street2} */}
                Suite 170
                <br></br>
              </>
              {/* )} */}
              {/* {address.city}, {address.state} {address.zip} */}
              Emeryville, CA 94608
            </address>
            <ul className="lg:col-span-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
            </ul>
            <ul className="lg:col-span-2">
              <li>
                <Link to="/company">Company</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
            <div className="lg:col-span-2">
              Linked in<br></br>
              <a href="mailto:hi@cuberg.net">hi@cuberg.net</a>
              <a href="#">Press Kit Download</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 mb-12">@2021 Cuberg</div>
    </footer>
  );
}
