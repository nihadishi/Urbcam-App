import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F1F0EC',
    paddingTop:29,
    height:"100%",

  },
  container: {
    paddingHorizontal: '7%',
    paddingBottom: '7%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    minHeight:450
    // flex:1,
  },
  goBack: {
    width: '50%',
    height: 45,
    paddingLeft:14
    
  },
  text: {
    marginVertical: '5%',

  },
  textName: {
    textAlign: 'center',
    fontSize: 30,
    color: '#014370',
    fontFamily:"Nunito-Black",
  },
  textAbout: {
    textAlign: 'center',
    fontSize: 12,
    color: '#014370',
    fontFamily:"Nunito-SemiBold",
  },
  inputs: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // backgroundColor:"blue"
  },
  email: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#014370',
    borderRadius: 12,
    paddingHorizontal: 7,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'space-between',
    position:"relative",
    height:42
    
  },
  pswd: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#014370',
    borderRadius: 12,
    paddingHorizontal: 7,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    height:42

  },
  inputpswd:{
    // position:"absolute",
    // top:"25%",
    right:6
  },
  forgot: {
    width: '100%',
    justifyContent: 'end',
  },
  loginButton: {
    backgroundColor: '#014370',
    width: 190,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#014370',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontFamily:"Nunito-Bold",
  },
  needy:{
    marginTop:90,
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    height:"40%",
    minHeight:330,
    overflow:"hidden",
    transform: [{scale: 1.27}],
},
needyImage:{
    width:"100%",
    height:"100%",
    
},
toast:{
  width:"100%",
  position:"absolute",
  top:0,
  left:0
 }
});
