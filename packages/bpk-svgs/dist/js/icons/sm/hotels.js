import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M24 23h-1.625c-.886 0-2.067-.763-2.067-1.704v-2.861H3.692v2.861c0 .899-1.077 1.635-1.945 1.699L1.626 23H0V12.043c0-1.008.827-1.826 1.846-1.826h20.308c1.02 0 1.846.818 1.846 1.826zM21.23 2c1.02 0 1.847.818 1.847 1.826v5.478h-2.77V7.478a.917.917 0 0 0-.814-.906l-.108-.007h-5.539a.92.92 0 0 0-.916.806l-.007.107v1.826h-1.846V7.478a.917.917 0 0 0-.815-.906l-.108-.007H4.615a.92.92 0 0 0-.916.806l-.007.107v1.826H.923V3.826C.923 2.818 1.75 2 2.77 2z" /></svg>);