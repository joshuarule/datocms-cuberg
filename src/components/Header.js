import React from "react";
import { Link } from "gatsby";

import Icon from "./Icon";

export default function Header() {
  return (
    <header className="absolute top-0 z-10 left-0 right-0 ">
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
