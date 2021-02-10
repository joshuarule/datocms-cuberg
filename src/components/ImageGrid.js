import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import RichText from "./RichText";

export default function ImageGrid({
  item,
  title,
  bodyNode,
  columns,
  options,
  style = {},
  gridClasses = "",
  className = "",
}) {
  if (!item || !item.length) return null;
  let columnClass;
  switch (columns) {
    case "4":
      columnClass = "lg:grid-cols-4 md:grid-cols-2";
      break;
    default:
      columnClass = "lg:grid-cols-3 md:grid-cols-2";
      break;
  }

  return (
    <div className={`${className ? className : ""}`}>
      <div className="text-center">
        {title && <h1 className="mb-d">{title}</h1>}
        {bodyNode && <RichText content={bodyNode} className="mb-d" />}
      </div>
      <ul
        className={`md:grid ${columnClass} ${
          gridClasses ? gridClasses : "lg:gap-1 lg:gap-y-e "
        } `}
      >
        {item.map((node, i) => {
          if (!node.image) return null;
          return options && options.logos ? (
            <li
              key={`image-${i}`}
              className={`gridImage mb-c md:mb-e lg:mb-0 flex relative aspect-w-16 aspect-h-9 rounded-lg`}
              style={{ backgroundColor: "rgba(0,0,0,.03)" }}
            >
              <Img
                className="w-full h-full absolute"
                style={{
                  position: "absolute",
                }}
                imgStyle={{
                  paddingTop: "2em",
                  paddingBottom: "2em",
                  paddingLeft: "2.5em",
                  paddingRight: "2.5em",
                  objectFit: "contain",
                  objectPosition: "50% 50%",
                }}
                fluid={node.image.fluid}
                alt={node.image.alt}
              />
            </li>
          ) : (
            <div>
              <div
                key={`image-${i}`}
                className={`gridImage ${
                  node.image.path ? "gridImage--hasLink" : ""
                } overflow-hidden md-max:mb-b relative aspect-w-16 aspect-h-9`}
              >
                <Img
                  className="object-cover w-full h-full"
                  style={{ position: "absolute" }}
                  fluid={node.image.fluid}
                  alt={node.image.alt}
                />
                {node.title && (
                  <div className="flex items-end absolute fill left-0 right-0 bottom-0 top-0">
                    <h3 className="absolute bottom-0 left-0 p-c text-white">
                      {node.title}
                    </h3>
                    <div className="flex-1 h-1/3 bg-gradient-to-t from-black-40 to-transparent"></div>
                  </div>
                )}
                {node.path && (
                  <Link
                    to={node.image.path}
                    className="absolute left-0 right-0 bottom-0 top-0"
                  />
                )}
              </div>
              {node.descriptionNode && (
                <RichText content={node.descriptionNode} className="mt-c" />
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
