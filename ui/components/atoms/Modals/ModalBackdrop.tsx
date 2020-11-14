import styled from "styled-components/native";
import { Dimensions } from "react-native"
import Constants from "expo-constants"
const { height, width } = Dimensions.get("window");


export default styled.View`
    background-color: rgba(255,255,255,.8);
    position:absolute;
    width:${width}px;
    height:${height + Constants.statusBarHeight}px;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index:1000;
`