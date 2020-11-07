import styled from "styled-components/native";
import { Dimensions } from "react-native"


const { height, width } = Dimensions.get("window");

export default styled.Modal`
    background:rgba(0,0,0,0.7);
    position:absolute;
    width:${width}px;
    height:${height}px;
    left:0;
    top:0;
`