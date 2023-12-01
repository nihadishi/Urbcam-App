import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',

    backgroundColor: '#F1F0EC',
  },
  noConnection: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  checkConnection: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
    fontWeight: '500',
  },
  needy: {
    width: '100%',
    height: 300,
    objectFit: 'contain',
  },
  button: {
    backgroundColor: '#014370',
    width: 147,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  refresh: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  refreshText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
  },
});
