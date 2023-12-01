import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main:{
        backgroundColor:"#014370",
        width:"100%"
    },
    container:{
        backgroundColor:"blue"
    },
    pp:{
        paddingTop:78,
        paddingBottom:23,
        alignItems:"center",
        justifyContent:"center"

    },
    ppImg:{
        backgroundColor:"#F1F0EC",
        width:80,
        height:80,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:80
    },
    ppName:{
        color:"#F1F0EC",
        fontFamily:"Nunito-SemiBold",
        fontSize:20,
        lineHeight:47,
        textAlign:"center",
        marginTop:7
    },
    items:{
        backgroundColor:"#F1F0EC",
        borderTopLeftRadius:49,
        borderTopRightRadius:49,
       
        paddingHorizontal:25
    },
    item:{
        paddingTop:37,
        borderBottomWidth:1,
        borderBottomColor:"#BDB9B9"
    },
    itemHeader:{
        color:"#838282",
        fontSize:15,
        fontFamily:"Nunito-SemiBold"
    },
    itemName:{
        color:"#000000",
        fontSize:20,
        fontFamily:"Nunito-SemiBold",
        paddingVertical:5
    }
})