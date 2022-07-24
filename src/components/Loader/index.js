import React from "react"
import ContentLoader from "react-content-loader"
const Loader = (props) => (
    <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" /> 
    <rect x="379" y="146" rx="0" ry="0" width="8" height="1" />
  </ContentLoader>
)
export {Loader}