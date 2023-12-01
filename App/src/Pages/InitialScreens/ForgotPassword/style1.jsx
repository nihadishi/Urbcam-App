import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F1F0EC',
    marginTop: 29,
    width:"100%",
    minHeight:400,
    height:"100%",
    flexDirection:"column"

  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: '7%',
    paddingBottom: '7%',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems:"center"
  },
  goBack: {
    width: '50%',
    height: 45,
    paddingLeft:14
    // backgroundColor:"red",
  },
  repairPswd: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    color: '#014370',
    fontWeight:"800"
  },
  writeNumber: {
    width: '100%',
    textAlign: 'center',
    fontSize: 17,
    color: '#014370',
  },
  numberArea: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    gap:29
  },
  numberCountry: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#014370',
    borderRadius: 12,
    height:39,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    gap:10
  },
  numberInput: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#014370',
    borderRadius: 12,
    height:39,
    paddingHorizontal: 5,
  },
  nextButton: {
    backgroundColor: '#014370',
    width: 140,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#014370',
    borderRadius: 10,
    elevation:4
    
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});
