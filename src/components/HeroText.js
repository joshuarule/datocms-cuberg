import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import RichText from "./RichText";

const Hero = ({ title, xlSize, subheadNode, className = "" }) => {
  return (
    <div className={`${className}`}>
      {title && <h1 className={`${xlSize ? "text-3xl" : "h1"}`}>{title}</h1>}
      {subheadNode && (
        <RichText content={subheadNode} className="mt-8 max-w-prose h3" />
      )}
    </div>
  );
};

export default Hero;
