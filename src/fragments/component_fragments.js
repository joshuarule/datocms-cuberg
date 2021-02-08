import { graphql } from "gatsby";

export const CTA_FIELDS = graphql`
  fragment ctaFields on DatoCmsCta {
    path
    reverse
    subtitle
    title
    bodyNode {
      childMarkdownRemark {
        html
      }
    }
    media {
      ... on DatoCmsImageBlock {
        id
        image {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    largeMedia
    label
  }
`;

export const HERO_IMAGE_FIELDS = graphql`
  fragment heroImageFields on DatoCmsHeroImage {
    label
    title
    path
    bodyNode {
      childMarkdownRemark {
        html
      }
    }
    media {
      alt
      fluid {
        ...GatsbyDatoCmsFluid
      }
    }
  }
`;
