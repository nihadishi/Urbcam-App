import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        height: '100%',
        backgroundColor: '#F1F0EC',
        position: 'relative',
      },
      container: {
        backgroundColor: '#F1F0EC',
        paddingHorizontal: 20,
        paddingVertical: 21,
        paddingTop: 40,
      },
      search: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 52,
        borderWidth: 1,
        borderColor: '#014370',
        borderRadius: 12,
      },
      searchInput: {
        fontSize: 18,
        paddingLeft: 11,
        width: '80%',
        fontFamily:"Nunito-Bold",
        color:"#014370"
      },
      searchIcon: {
        paddingHorizontal: 13,
        height: '100%',
        backgroundColor: '#014370',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
      },
      items:{
        width:"100%",
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:27,
        paddingTop:20,
      },
      item:{
        marginBottom:23
      },
      itemImg:{
        objectFit:"cover",
        width:143,
        height:131,
        borderRadius:10,
    
      },
      itemText:{
        marginTop:10,
        fontSize:20,
        color:"#000000",
        fontFamily:"Nunito-Bold",
        width:"100%",
        textAlign:"center"
      }
})