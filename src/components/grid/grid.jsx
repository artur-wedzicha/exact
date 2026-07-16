import React from "react";
import "./grid.css";

const Grid = ({
                container = false,
                item = false,
                spacing = 0,
                xs,
                sm,
                md,
                lg,
                xl,
                className = "",
                children,
                ...props
              }) => {
  let classes = "";

  if (container) classes += " grid-container";
  if (item) classes += " grid-item";

  if (spacing) classes += ` spacing-${spacing}`;

  if (xs) classes += ` xs-${xs}`;
  if (sm) classes += ` sm-${sm}`;
  if (md) classes += ` md-${md}`;
  if (lg) classes += ` lg-${lg}`;
  if (xl) classes += ` xl-${xl}`;

  if (className) classes += ` ${className}`;

  return (
    <div className={classes.trim()} {...props}>
      {children}
    </div>
  );
};

export default Grid;
