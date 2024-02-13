import { Dimensions } from "react-native";
const { height , width} = Dimensions.get('window');

const COLORS = {
    primary :"#2A4D50",
    secondary:"#DDF0FF"
}
const SIZES = {
    xSmall:10,
    small:14,
    medium:16,
    large:20
}
const SHADOWS = {
    small : { 
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3,
        elevation:2
    },
    medium : { 
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:6,
        elevation:5
    }
}

export { COLORS, SIZES,SHADOWS};