import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    footer:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        width:"100%",
        minWidth:200,
        height:58,
        backgroundColor:"#F1F0EC",
        borderColor:"#BDB9B9",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        zIndex:5
        
    },
    footerText:{
        color:"#838282",
    },
    footerTextSelected:{
        color:"#014370",
    },
    items:{
        alignItems:"center",
        justifyContent:"flex-end",
        // backgroundColor:"red",
        height:"80%"
    },
    svg:{
        alignItems:"center",
        justifyContent:"flex-start",
        // backgroundColor:"blue",
        width:"100%",
    }
})