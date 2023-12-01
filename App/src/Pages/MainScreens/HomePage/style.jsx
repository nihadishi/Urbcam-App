import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Görüntüyü kaplama
  },
  main: {
    height: '100%',
    position: 'relative',
    zIndex:10
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:14,
    paddingTop:20
  },
  headerText:{
    fontSize:24,
    color:"#014370",
    fontWeight:"800",
    fontFamily:"Nunito-ExtraBold"
  },
  topServices:{
    flexDirection: 'column',
    justifyContent:"space-between",
    paddingHorizontal:21,
    alignItems:"center",
    gap:30,
    paddingVertical:39,
  },
  serviceText:{
    fontSize:25,
    width:"100%",
    // fontWeight:"700",
    color:"#014370",
    fontFamily:"Nunito-ExtraBold",
    textAlign:"left"
  },
  serviceItems:{
    width:"100%",
    flexDirection:"column",
    justifyContent:"space-around",
    borderRadius:10,
    alignItems:"center",
    gap:20
    
  },
  serviceItem:{
    backgroundColor:"#00000010",
    borderRadius:10,
    objectFit:"cover",
    marginTop:440,
    width:100,
    height:94,
    borderRadius:10,
    overflow:"hidden",
    // yeni shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // 
  },
  serviceItem2:{
    backgroundColor:"#00000010",
    borderRadius:10,
    objectFit:"cover",
    width:"100%",
    height:84,
    borderRadius:10,
    overflow:"hidden",
    // yeni shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignItems:"center",
    justifyContent:"center"
    // 
  },
  moreServices:{
    color:"#0064A8",
    fontSize:22,
    fontWeight:"400",
    textAlign:"center",
    marginTop:11,
    paddingHorizontal:21,
    paddingVertical:10,
    fontFamily:"Nunito-Medium",
  },
  offers:{
    paddingBottom:21,
    flexDirection:"column",
    gap:34
  },
  offerText:{
    paddingLeft:21,
    fontSize:25,
    // fontWeight:"700",
    color: "#014370",
    fontFamily:"Nunito-ExtraBold",
  },
  offerItems:{
    paddingLeft:21,
    flexDirection:"row",
  },
  offerItem:{
    marginRight:33,
    backgroundColor:"#D9D9D9",
    width:286,
    height:187,
    borderRadius:15,
    overflow:"hidden"
  },
  offerItemView:{
    width:"100%",
    height:"100%",
  },
  offerItemViewImg:{
    width:286,
    height:187,
    objectFit:"cover"
  }
});
