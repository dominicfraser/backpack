import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2.158a8 8 0 0 0-8 8v.06a5.522 5.522 0 0 0 .027.605 7.955 7.955 0 0 0 1.357 3.833 30.756 30.756 0 0 0 5.972 6.94.965.965 0 0 0 1.288 0 30.731 30.731 0 0 0 5.972-6.94 7.955 7.955 0 0 0 1.357-3.833 5.51 5.51 0 0 0 .027-.604v-.061a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" /></svg>);