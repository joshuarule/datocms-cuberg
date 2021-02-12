import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import RichText from "../components/RichText";
import ImageGrid from "../components/ImageGrid";

const ProductPage = ({ data: { datoCmsPageProduct: pageData } }) => {
  const { specifications, ctaOne } = pageData;
  console.log(ctaOne);
  return (
    <Layout>
      <Hero {...pageData.hero} xlSize={true} className="mb-20" />
      <div className="container">
        <Img
          fluid={pageData.image.fluid}
          alt={pageData.image.alt}
          className="mb-g"
        />
        <h1 className="text-2xl mb-g">{pageData.title}</h1>
        <Cta {...pageData.featureImageGrid} />
        <section>
          <div className="text-center">
            <h1 className="text-3xl mb-d">{specifications.title}</h1>
            <RichText
              content={specifications.bodyNode}
              className="h3 font-medium mb-d"
            />
          </div>
          <ul className="lg:flex lg:justify-center mb-g">
            {specifications.specs.map((spec) => {
              return (
                <div key={spec.name} className="text-center mx-12">
                  <span className="font-thin text-3xl">{spec.value}</span>
                  <span className="h3 font-light">{spec.unit}</span>
                  <div className="h3 font-medium">{spec.name}</div>
                </div>
              );
            })}
          </ul>
        </section>
        <ImageGrid {...pageData.logoGrid} className="mb-g" />
        <Cta {...pageData.ctaOne} className="mb-g" />
        <ImageGrid {...pageData.imageGrid} className="mb-g" />
      </div>
    </Layout>
  );
};

export default ProductPage;

export const query = graphql`
  query ProductPageQuery {
    datoCmsPageProduct {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      hero {
        ...heroImageFields
      }
      title
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      featureImageGrid {
        ...featureImageGridFields
      }
      specifications {
        bodyNode {
          childMarkdownRemark {
            html
          }
        }
        title
        specs {
          unit
          value
          name
        }
      }
      logoGrid {
        ...imageGridFields
      }
      ctaOne {
        ...ctaFields
      }
      imageGrid {
        ...imageGridFields
      }
    }
  }
`;
