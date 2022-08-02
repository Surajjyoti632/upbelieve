import React from "react";
const fs = require("fs");

export const WriteFile = (imgSrc) => {
  var base64Data = imgSrc.replace(/^data:image\/jpg;base64,/, "");
  fs.writeFile("out.jpg", base64Data, "base64", function (err) {
    console.log(err);
  });
};
