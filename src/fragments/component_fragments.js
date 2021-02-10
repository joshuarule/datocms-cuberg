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

export const TEXT_COLUMNS = graphql`
  fragment textColumnsFields on DatoCmsTextGrid {
    columns {
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
    title
  }
`;

export const IMAGE_GRID = graphql`
  fragment imageGridFields on DatoCmsImageGrid {
    title
    bodyNode {
      childMarkdownRemark {
        html
      }
    }
    item {
      title
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          src
        }
        alt
      }
    }
  }
`;

export const HERO_TEXT_FIELDS = graphql`
  fragment heroTextFields on DatoCmsHeroText {
    title
    xlSize
    subheadNode {
      childMarkdownRemark {
        html
      }
    }
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
