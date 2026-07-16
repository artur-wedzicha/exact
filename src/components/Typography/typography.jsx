import React from "react";
import "./typography.css"

const variantToElement = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  text: "p",
  label: "label",
  button: "span",
};

const Typography = ({ variant = "text", children, className = "", ...rest }) => {
  const Component = variantToElement[variant] || "p";
  const baseClass = `typography-${variant}`;
  const combinedClassName = `${baseClass} ${className}`.trim();

  return (
    <Component className={combinedClassName} >
      {children}
    </Component>
  );
};

export default Typography;
