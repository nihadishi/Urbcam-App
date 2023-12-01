import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    
    gap:30,
  },
  text:{
    padding:20,
    color:"#014370",
    fontSize:18,
    fontFamily:"Nunito-SemiBold"
  },
  teamText:{
    paddingHorizontal:20,
    color:"#014370",
    fontSize:25,
    fontFamily:"Nunito-Bold"
  },
  teams:{
    paddingBottom:21,
    flexDirection:"column",
  },
  teamItems:{
    width:"100%",
    paddingLeft:5,
    flexDirection:"row",
  },
  teamItem:{
    marginRight:10,
    backgroundColor:"#000",
    alignItems:"center",
    justifyContent:"center",
    width:156,
    height:256,
    borderRadius:15
  },
});
