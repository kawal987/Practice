import React from "react";
import image from "../Images/tree.jpg";
const ImageDownload = () => {
  return (
    <div>
      <a href={image} download>
        Click to download
      </a>
    </div>
  );
};

export default ImageDownload;
