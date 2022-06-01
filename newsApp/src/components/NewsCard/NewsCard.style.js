import {Dimensions, StyleSheet} from "react-native"

export default StyleSheet.create({
    container:{
        marginVertical:5,
        
    },
    image:{
        height:Dimensions.get("window").height/3,
        resizeMode:"stretch"
    },
    title:{
        fontWeight:"bold",
        color:"black",
        fontSize:15
    },
    author:{
        textAlign:"right",
        color:"green",
        fontSize:13,
    },
    description:{
        fontWeight:"bold"
    }
})