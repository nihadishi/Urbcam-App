import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    height: '100%',
    zIndex: 100,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#00000072',
  },
  container: {
    height: '100%',
    width: '75%',
    left: 0,
    bottom: 0,
    top: 0,
    backgroundColor: '#fff',
    overflow: 'scroll',
    paddingLeft: 20,
    paddingTop: 55,
    justifyContent: 'start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    paddingBottom:52
  },
  profilePhoto: {
    height: 70,
    width: 70,
    backgroundColor: '#D9D9D9',
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 20,
    color: '#014370',
    fontWeight:"600",
  },
  items: {
    flexDirection: 'column',
    gap: 41,
    paddingLeft: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    width:"auto"
  },
  itemText: {
    fontSize: 17,
    fontWeight:"400",
    color: '#014370',
  },
  logout: {
    width: 102,
    backgroundColor: '#014370',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
    height:35,
    position:"absolute",
    bottom:28,
    left:20,
  },
  logoutButton: {
    width:"100%",
    flexDirection: 'row',
    justifyContent:"start",
    alignItems:"center",
    gap:9,
    paddingLeft:10,
    // backgroundColor:"red"
  },
  logoutText: {
    fontSize: 18,
    textAlign:"center",
    textAlignVertical:"center",
    color: '#fff',
    // backgroundColor:"blue"
  },
  outContainer: {
    width: '25%',
    height: '100%',
  },
});
