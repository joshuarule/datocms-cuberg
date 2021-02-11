import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import RichText from "./RichText";

const Hero = ({
  label,
  title,
  path,
  bodyNode,
  media,
  xlSize,
  theme,
  className = "",
}) => {
  const fontColor = theme === "dark" ? "text-white" : "text-black";
  return (
    <div className={`${className} relative`}>
      {media && media[0] && (
        <Img
          alt={media[0].alt}
          className={"absolute object-fit w-full h-full"}
          fluid={media[0].fluid}
        />
      )}
      <div className="absolute z-10 top-0 left-0 bottom-0 right-0 flex items-end">
        <div className="w-full container pb-8 md:grid md:grid-cols-3">
          <div className="md:col-span-2">
            {title && (
              <h1
                className={`font-xBold ${fontColor} ${
                  xlSize ? "text-3xl" : "text-xl"
                }`}
              >
                {title}
              </h1>
            )}
            <div className="max-w-prose">
              {bodyNode && (
                <RichText content={bodyNode} className={`mt-8 ${fontColor}`} />
              )}
            </div>
            {label && path && (
              <Link to={path} className="mt-8 button">
                {label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
