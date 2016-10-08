import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "overflowX": "hidden"
    },
    "html": {
        "overflowX": "hidden"
    },
    "nav ul": {
        "position": "fixed",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "background": "#458902",
        "display": "block",
        "width": 160,
        "height": 600,
        "right": 0,
        "top": 0
    },
    "nav li": {
        "listStyleType": "none",
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0
    },
    "nav a": {
        "paddingTop": 0,
        "paddingRight": 150,
        "paddingBottom": 0,
        "paddingLeft": 10
    }
});