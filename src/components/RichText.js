import React from "react";

export default function RichText({ content, className }) {
  return (
    <div
      className={`richText ${className}`}
      dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
    />
  );
}
