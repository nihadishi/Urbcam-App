import {StyleSheet} from 'react-native';
const itemWidth = 100; // İtemin genişliği (örneğin, yüzde 100)
const itemNeedyWidth = 60; // itemNeedy genişliği (örneğin, 60)
const calculatedTextsWidth = itemWidth - itemNeedyWidth;
export const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    height: '100%',
    zIndex: 100,
    width: '100%',
    flexDirection: 'row-reverse',
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
    paddingHorizontal: 23,
    paddingTop: 57,
    paddingBottom: 8,
    flexDirection: 'column',
    gap: 22,
  },
  header: {
    backgroundColor: '#014370',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 4,
    borderColor: '#014370',
    borderWidth: 2,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
  },
  items: {
    flexDirection: 'column',
  },
  item: {
    elevation: 4,
    width: '100%',
    shadowColor: 'rgba(0, 0, 0, 0.45)',
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 5,
    gap: 10,
    marginBottom: 10,
  },
  itemNeedy: {
    width: 60,
    height: 60,
  },
  texts: {
    height: '100%',
    width: '68%',
    flexDirection: 'column',
    gap: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#014370',
  },
  description: {
    fontSize: 11,
    fontWeight: '400',
    color: '#014370',
  },
  time: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  outContainer: {
    width: '25%',
    height: '100%',
  },
});
