import React, { FunctionComponent, ReactElement } from "react";

export const renderComponentOrElement = <P extends object>(
  ComponentOrElement: FunctionComponent | ReactElement,
  props: P = {} as P
) => {
  if (React.isValidElement(ComponentOrElement)) {
    return React.cloneElement(ComponentOrElement, props); // Already a React element
  }
  if (typeof ComponentOrElement === "function") {
    return <ComponentOrElement {...props} />; // Render as a component
  }
  return null;
};
