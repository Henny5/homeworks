import $ from "jquery";
import "./index.css";
import apple from "../images/redapple.png";
("use strict");

$("#text").text("hello world!");
const pic = new Image();
pic.src = apple;
$("body").append(pic);

//only import for css cuz not importing anything  spcifci just want the hole file
//webpack.config.js= make a file then install loaders= npm i __-loaders --save-dev, have to instal watever want to use from node modules
