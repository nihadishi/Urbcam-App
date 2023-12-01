import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F1F0EC',
    marginTop: 29,
    width: '100%',
    minHeight: 450,
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  goBack: {
    width: '50%',
    height: 45,
    paddingLeft:14
  },
  repairPswd: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    color: '#014370',
    fontWeight: '800',
  },
  writePswd: {
    width: '100%',
    textAlign: 'center',
    fontSize: 17,
    color: '#014370',
  },
  pswdInput: {
    width: '100%',
    height:39,
    borderWidth: 1,
    borderColor: '#014370',
    borderRadius: 12,
    paddingHorizontal: 10,
    color:"#014370"
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
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});
