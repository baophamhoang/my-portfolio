import React, { FunctionComponent, ReactElement } from "react";

export const renderComponentOrElement = (
  ComponentOrElement: FunctionComponent | ReactElement
) => {
  if (React.isValidElement(ComponentOrElement)) {
    return ComponentOrElement; // Already a React element
  }
  if (typeof ComponentOrElement === "function") {
    return <ComponentOrElement />; // Render as a component
  }
  return null;
};
