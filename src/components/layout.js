// eslint-disable, jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Footer from "./Footer";
import Header from "./Header";

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
  // return (
  //   <StaticQuery
  //     query={graphql`
  //       query LayoutQuery {
  //         datoCmsSite {
  //           globalSeo {
  //             siteName
  //           }
  //           faviconMetaTags {
  //             ...GatsbyDatoCmsFaviconMetaTags
  //           }
  //         }
  //         datoCmsHome {
  //           seoMetaTags {
  //             ...GatsbyDatoCmsSeoMetaTags
  //           }
  //         }
  //       }
  //     `}
  //     render={(data) => (
  //       <div>
  //         <HelmetDatoCms
  //           favicon={data.datoCmsSite.faviconMetaTags}
  //           seo={data.datoCmsHome.seoMetaTags}
  //         />
  //         <div>
  //           {children}
  //         </div>
  //       </div>
  //     )}
  //   />
  // );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;
