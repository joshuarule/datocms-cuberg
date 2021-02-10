import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import RichText from "./RichText";

const Hero = ({ title, xlSize, subheadNode, className = "" }) => {
  return (
    <div className={`${className}`}>
      {title && <h1 className={`${xlSize ? "font-4xl" : ""}`}>{title}</h1>}
      {subheadNode && (
        <RichText content={subheadNode} className="mt-8 max-w-prose" />
      )}
    </div>
  );
};

export default Hero;
