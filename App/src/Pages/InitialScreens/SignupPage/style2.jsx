import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F1F0EC',
    marginTop: 29,
    width: '100%',
    minHeight: 550,
    height: '100%',
    flexDirection: 'column',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: '7%',
    paddingBottom: '15%',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  goBack: {
    width: '50%',
    height: 45,
    paddingLeft:14
  },
  createAccount: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    color: '#014370',
    fontFamily:"Nunito-Black"
  },
  client: {
    paddingHorizontal: 33,
    paddingVertical: 6,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#014370',
    height:37
  },
  clientText:{
    color: 'white',
    fontSize: 17,
    fontFamily:"Nunito-Bold"

  },
  inputArea: {
    width: '100%',
    flexDirection: 'column',
    gap: 20,
  },
  writeDateBirth: {
    width: '100%',
    textAlign: 'center',
    fontSize: 17,
    fontWeight:"400",
    color: '#014370',
    fontFamily:"Nunito-SemiBold"

  },
  input: {
    borderWidth: 1,
    borderColor: '#014370',
    borderRadius: 12,
    width: '100%',
    height: 37,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gender:{
    flexDirection:"row",
    justifyContent:"space-between",
    height:41,
    alignItems:"center"
  },
  genderTypeSelected:{
    backgroundColor:"#014370",
    width:"38%",
    height:"100%",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#014370",
  },
  genderTypeSelectedText:{
    fontSize:20,
    color:"#fff",
    fontFamily:"Nunito-SemiBold"
  },
  genderTypeNotSelected:{
    width:"38%",
    height:"100%",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#014370",
  },
  genderTypeNotSelectedText:{
    fontSize:20,
    color:"#014370",
    fontFamily:"Nunito-SemiBold"
  },
  speciality:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  specialityText:{
    fontSize:24,
    color:"#014370",
    height:"100%",
    textAlignVertical:"center",
    fontFamily:"Nunito-Bold"
  },
  specialityItem:{
    width:"100%",
    color:"#014370"
  },
  agreement:{
    justifyContent:"flex-end",
    flexDirection:"row",
    alignItems:"center"
  },
  agreementText:{
    fontSize:18,
    color:"#014370",
    textAlign:"center",
    fontFamily:"Nunito-ExtraBold"

  },
  nextButton: {
    backgroundColor: '#014370',
    width: 130,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#014370',
    borderRadius: 10,
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});
