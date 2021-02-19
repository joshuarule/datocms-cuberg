import React, { useEffect, useState } from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";
import Cta from "../components/Cta";
import RichText from "../components/RichText";
import HeroText from "../components/HeroText";

export default ({
  data: { datoCmsPageCareer: pageData, allDatoCmsEmployeeQuote: quotes },
}) => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    console.log("called");
    fetch("/.netlify/functions/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data.jobs));
  }, []);
  console.log(jobs);
  return (
    <Layout>
      <Hero {...pageData.hero} className="mb-20" />
      <div className="container">
        <HeroText {...pageData.featureOne} className="text-center py-g" />
        <Cta {...pageData.ctaOne} className="pb-g" />
        <section className="mb-g">
          <h1 className="text-center h1 mb-e">
            {pageData.positionsSectionTitle}
          </h1>
          {jobs && (
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-e">
              {jobs.map((job) => (
                <li
                  className="relative py-12 px-8 flex-1 flex flex-col justify-between border border-b-10 hover:border-orange"
                  style={{
                    minHeight: "280px",
                  }}
                >
                  <div className="">
                    <div className="text-h3 font-bold">{job.title}</div>
                    <div className="text-black-60">
                      {job.location.location_str}.
                    </div>
                  </div>
                  <div>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0"
                    >
                      <span className="sr-only">View Job</span>
                    </a>
                  </div>
                </li>
              ))}
              <li
                className="relative py-12 px-8 flex-1 flex flex-col justify-between bg-orange"
                style={{
                  minHeight: "280px",
                }}
              >
                <div className="text-h3 text-white font-bold">View All</div>
                <span>only show if there are more jobs?</span>
                <a
                  href="https://cuberg.workable.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0"
                >
                  <span className="sr-only">View All</span>
                </a>
              </li>
            </ul>
          )}
        </section>
      </div>
      <Hero {...pageData.featureHero} className="mb-20" />
      <div className="container">
        <Cta {...pageData.featureImageGrid} />
        <section>
          <h1 className="text-center h1 my-g">
            {pageData.customerTestimonialTitle}
          </h1>
          {/* like the news article styling */}
          {!!quotes.nodes.length && (
            <ul>
              {quotes.nodes.map((quote, i) => (
                <li
                  key={`quote-${i}`}
                  className={`quote mb-g grid grid-cols-2 gap-0 relative group items-center`}
                >
                  <div className="quote-image">
                    <div className="aspect-h-3 aspect-w-4 relative overflow-hidden">
                      <Img
                        fluid={quote.image.fluid}
                        style={{ position: "absolute" }}
                        className="object-cover w-full h-full"
                        alt={quote.image.alt}
                      />
                    </div>
                  </div>
                  <div className="quote-copy flex-1 bg-fog p-f">
                    <div className="h3 font-bold mb-c">
                      {quote.name} | {quote.title}
                    </div>
                    <blockquote className="h3">
                      <RichText content={quote.quoteNode} className="mb-d" />
                    </blockquote>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query CareersQuery {
    datoCmsPageCareer {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      hero {
        ...heroImageFields
      }
      featureHero {
        ...heroImageFields
      }
      featureOne {
        ...heroTextFields
      }
      ctaOne {
        ...ctaFields
      }
      featureImageGrid {
        ...featureImageGridFields
      }
      customerTestimonialTitle
      positionsSectionTitle
    }
    allDatoCmsEmployeeQuote {
      nodes {
        title
        name
        quoteNode {
          childMarkdownRemark {
            html
          }
        }
        image {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;
