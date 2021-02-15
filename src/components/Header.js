import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import Icon from "./Icon";

export default function Header({ infoBar }) {
  return (
    <header
      className={`absolute ${infoBar ? "top-20" : "top-0"} z-50 left-0 right-0`}
    >
      <div className="container py-8">
        <nav className="flex justify-between">
          <div style={{ maxWidth: "200px" }}>
            <Link to="/">
              <Icon name="logo" className="w-full h-full text-black" />
            </Link>
          </div>
          <ul className="flex gap-10">
            <li>
              <Link className="py-4 block" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="py-4 block" to="/technology">
                Technology
              </Link>
            </li>
            <li>
              <Link className="py-4 block" to="/product">
                Product
              </Link>
            </li>
            <li>
              <Link className="py-4 block" to="/company">
                Company
              </Link>
            </li>
            <li>
              <Link className="py-4 block" to="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="py-4 block" to="/news">
                News
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
