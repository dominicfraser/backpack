import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12zm11-4a1 1 0 0 0-2 0v5a1 1 0 0 0 .504.868l3.5 2a1 1 0 0 0 1.033-1.713l-.041-.023L13 12.42z" /></svg>);