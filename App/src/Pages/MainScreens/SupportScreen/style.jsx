import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    // gap: 30,
  },
  mainText: {
    padding: 20,
    color: '#014370',
    fontSize: 22,
    fontFamily: 'Nunito-Bold',
    
  },
  questions: {
    padding: 20,
  },
  question: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 14,
  },
  questionText: {
    textAlign: 'left',

    margin: 'auto',
    fontSize: 22,
    color: '#014370',
    fontFamily: 'Nunito-Bold',
  },
});
