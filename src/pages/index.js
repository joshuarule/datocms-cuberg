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
      <Hero {...pageData.hero} className="mb-20" />
      <div className="container">
        <Cta {...pageData.ctaOne} />
        <Cta {...pageData.ctaTwo} />
      </div>
      <Hero {...pageData.featureHero} className="mb-20" />
      <div>
        <div className="container">
          <Cta {...pageData.featureImageGrid} />
          <h1 className="mb-8">{pageData.newsTitle}</h1>
          <div className="md:grid md:grid-cols-3">
            {articles.nodes.map(({ title, previewImage, slug }) => (
              <aside className="mb-8">
                <Img
                  className="mb-4"
                  fluid={previewImage.fluid}
                  alt={previewImage.alt}
                />
                <h1 className="mb-8">{title}</h1>
                <Link to={`news/${slug}`}>Read More</Link>
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
        bodyNode {
          childMarkdownRemark {
            html
          }
        }
        title
        path
        label
        imageGrid {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
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
