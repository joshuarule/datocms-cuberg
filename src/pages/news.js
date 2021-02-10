import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Hero from "../components/Hero";
import Layout from "../components/layout";
import RichText from "../components/RichText";

export default ({
  data: {
    datoCmsPageNews: pageData,
    allDatoCmsArticleType: categories,
    allDatoCmsArticle: articles,
  },
}) => {
  const [currentCategory, setCurrentCategory] = useState(
    categories.nodes[0].category
  );

  const articlesByCategory = {};
  articles.nodes.forEach((article) =>
    article.articleCategories.forEach((item) => {
      if (!articlesByCategory[item.category]) {
        articlesByCategory[item.category] = [];
      }
      articlesByCategory[item.category].push(article);
    })
  );

  return (
    <Layout>
      <Hero {...pageData.hero} className="mb-20" />
      <div className="container">
        <div className="flex">
          <RichText content={pageData.bodyNode} />
          <a
            href="/pressKitFile"
            download="file"
            target="_blank"
            rel="noreferrer"
          >
            Icon - {pageData.pressKitDownloadText}
          </a>
        </div>
        <nav className="border-b my-f">
          <ul className="flex justify-center">
            {categories.nodes
              .filter((node) => articlesByCategory[node.category])
              .map((node) => (
                <li
                  key={node.category}
                  className={`mr-e f-h3 ${
                    currentCategory === node.category ? "text-brand" : ""
                  }`}
                >
                  <button
                    onClick={() => {
                      setCurrentCategory(node.category);
                    }}
                  >
                    {node.category}
                  </button>
                </li>
              ))}
          </ul>
        </nav>
        <ul className="">
          {articlesByCategory[currentCategory].map((article, i) => {
            return (
              <li
                key={article.slug}
                className={`mb-f flex relative group items-center`}
              >
                <div className="flex-1">
                  <div className="aspect-h-3 aspect-w-4 relative overflow-hidden">
                    <Img
                      fluid={article.previewImage.fluid}
                      style={{ position: "absolute" }}
                      className="object-cover w-full h-full"
                      alt={article.previewImage.alt}
                    />
                  </div>
                </div>
                <div
                  className="flex-1 bg-fog border-b-10 border-smoke p-f"
                  style={{
                    position: "relative",
                    left: "-40px",
                    marginRight: "-40px",
                  }}
                >
                  {article.articleCategories.map((category) => (
                    <span>{category.category}</span>
                  ))}
                  <h1 className="group-hover:text-brand mb-d">
                    {article.title}
                  </h1>
                  <RichText content={article.excerptNode} className="mb-d" />
                  <p className="">Read more</p>
                </div>
                <Link
                  className="absolute block w-full top-0 right-0 bottom-0 left-0"
                  to={`/news/${article.slug}`}
                >
                  <span className="sr">Read More</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query NewsQuery {
    datoCmsPageNews {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      hero {
        ...heroImageFields
      }
      pressKitDownloadText
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
    allDatoCmsArticleType {
      nodes {
        category
      }
    }
    allDatoCmsArticle {
      nodes {
        articleCategories {
          category
        }
        excerptNode {
          childMarkdownRemark {
            html
          }
        }
        title
        slug
        previewImage {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;
