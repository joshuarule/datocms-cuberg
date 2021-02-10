import React from "react";
import Img from "gatsby-image";
import slugify from "slugify";
import { Link } from "gatsby";
import RichText from "./RichText";

// import RichText from './RichText'

export default ({
  className = "",
  reverse,
  subtitle,
  bodyNode,
  title,
  media,
  imageGrid,
  largeMedia,
  label,
  path,
}) => {
  let textAlign = "items-center";
  // if (options) {
  //   switch (options.textAlign) {
  //     case 'top':
  //       textAlign = 'items-start'
  //       break
  //     case 'bottom':
  //       textAlign = 'items-end'
  //       break
  //     default:
  //       break
  //   }
  // }

  const imageColSize = largeMedia ? "lg:col-span-8" : "lg:col-span-6";
  const textColSize = largeMedia ? "lg:col-span-4" : "lg:col-span-6";

  return (
    <section
      id={slugify(title)}
      className={`cta 
        md:grid md:grid-cols-1 lg:grid-cols-12 mb-f lg:mb-g ${className}
        ${textAlign}
      `}
    >
      <div
        className={`cta-copy
          mb-e md:mb-f lg:mb-0
          ${textColSize}
        `}
      >
        <div className="">
          {title && <h2 className="f-h3 mb-e">{title}</h2>}
          {subtitle && <p className="">{subtitle}</p>}
          {bodyNode && <RichText content={bodyNode} />}
          {label && path && (
            <Link to={path} className="mt-8 button">
              {label}
            </Link>
          )}
        </div>
      </div>

      {/* switch for CTA */}

      {imageGrid && (
        <div className={`${imageColSize} md:grid md:grid-cols-2 gap-8`}>
          {imageGrid.map((image) => {
            return <Img className={``} fluid={image.fluid} alt={image.alt} />;
          })}
        </div>
      )}

      {/* aspect? */}
      {media !== undefined &&
        (false ? (
          media &&
          media[0](
            <Img
              className={`
                w-full md-max:mb-b
                ${imageColSize}
                ${reverse ? "" : "lg:order-first"}
              `}
              fluid={media[0].image.fluid}
              alt={media[0].image.alt}
            />
          )
        ) : (
          <div
            className={`md-max:mb-b relative aspect-w-16 aspect-h-9 
              ${reverse ? "" : "lg:order-first"}
              ${imageColSize}
              `}
          >
            {media && (
              <Img
                className="object-cover w-full h-full"
                style={{ position: "absolute" }}
                fluid={media[0].image.fluid}
                alt={media[0].image.alt}
              />
            )}
          </div>
        ))}
    </section>
  );
};
