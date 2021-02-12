import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Cta from "../components/Cta";

const IndexPage = ({
  data: { datoCmsPageHome: pageData, allDatoCmsArticle: articles },
}) => {
  return (
    <Layout>
      <Hero {...pageData.hero} xlSize={true} className="mb-20" />
      <div className="container">
        <Cta {...pageData.ctaOne} />
        <Cta {...pageData.ctaTwo} />
      </div>
      <Hero {...pageData.featureHero} theme="dark" className="mb-20" />
      <div>
        <div className="container">
          <Cta {...pageData.featureImageGrid} />
          <h1 className="mb-8 text-center text-xl">{pageData.newsTitle}</h1>

          {/* News */}

          <div className="md:grid md:grid-cols-3">
            {articles.nodes.map(({ title, previewImage, slug }) => (
              <aside className="mb-8">
                <div className="aspect-h-3 aspect-w-4 relative overflow-hidden">
                  <Img
                    fluid={previewImage.fluid}
                    style={{ position: "absolute" }}
                    className="object-cover w-full h-full"
                    alt={previewImage.alt}
                  />
                </div>
                <div className="border-b-4 bg-rust-20 p-10 mx-6 relative -top-8">
                  <h1 className="mb-8">{title}</h1>
                  <Link to={`news/${slug}`}>[Read More]</Link>
                </div>
              </aside>
            ))}
          </div>
          <div className="flex justify-center mb-12">
            <Link className="button" to={pageData.newsLinkPath}>
              {pageData.newsLinkLabel}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    datoCmsPageHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      hero {
        ...heroImageFields
      }
      ctaOne {
        ...ctaFields
      }
      ctaTwo {
        ...ctaFields
      }
      featureHero {
        ...heroImageFields
      }
      featureImageGrid {
        ...featureImageGridFields
      }
      newsTitle
      newsLinkLabel
      newsLinkPath
    }
    allDatoCmsArticle(limit: 3) {
      nodes {
        title
        previewImage {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        excerpt
        slug
      }
    }
  }
`;
