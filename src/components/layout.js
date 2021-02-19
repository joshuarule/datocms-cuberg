import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Footer from "./Footer";
import Header from "./Header";

const TemplateWrapper = ({ children, location }) => {
  console.log(location);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            domain
            name
            globalSeo {
              facebookPageUrl
              siteName
              twitterAccount
              fallbackSeo {
                title
                twitterCard
                description
                image {
                  fixed {
                    src
                  }
                }
              }
            }
          }
          datoCmsInfoBar {
            text
            visible
            path
            label
          }
        }
      `}
      render={({ datoCmsInfoBar: infoBar }) => (
        <div>
          {/* <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          /> */}
          {infoBar.visible && (
            <Link
              to={infoBar.path}
              className={`h-20 flex items-center bg-blue hover:bg-blue-75`}
            >
              <div className="container text-center text-white font-medium">
                {infoBar.text}
              </div>
            </Link>
          )}
          <Header infoBar={infoBar.visible} />
          <main className={`${infoBar.visible ? "infoBar" : ""}`}>
            {children}
          </main>
          <Footer />
        </div>
      )}
    />
  );
};

export default TemplateWrapper;
