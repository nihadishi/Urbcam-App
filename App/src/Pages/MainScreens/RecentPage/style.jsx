import {StyleSheet} from 'react-native';

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
  items: {
    flexDirection: 'column',
    marginBottom:37,
    paddingTop:31
  },
  item: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: 126,
    borderRadius: 20,
    marginBottom:31
  },
  itemText:{
    paddingTop:10,
    paddingBottom:5,
    width:"100%",
    textAlign:"center",
    fontSize:24,
    color:"#014370",
    fontFamily:"Nunito-ExtraBold"
  },
  itemContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:12
  },
  itemContainerTexts:{
    flexDirection:"column",
    gap:10
  },
  itemContainerText:{
        fontSize:19,
        color:"#014370",
        fontWeight:"600",
        fontFamily:"Nunito-Medium"
  }
});
