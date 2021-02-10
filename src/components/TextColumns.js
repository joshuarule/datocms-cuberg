import React from "react";
import RichText from "./RichText";

export default function TextColumns({
  title,
  columnAmount,
  columns,
  className = "",
}) {
  let columnClass;
  switch (columnAmount) {
    case "4":
      columnClass = "lg:grid-cols-4";
      break;
    default:
      columnClass = "lg:grid-cols-3";
      break;
  }
  return (
    <div className={`textColumns`}>
      {title && <h1 className="mb-d">{title}</h1>}
      <div className={`grid ${columnClass} ${className}`}>
        {columns.map((column, i) => (
          <div key={`column-${i}`} className="textColumn md-max:mb-f">
            {column.title && <h3 className="mb-d">{column.title}</h3>}
            {column.bodyNode && (
              <RichText
                content={column.bodyNode}
                className="f-b1 max-prose-50 lg:pr-f"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
