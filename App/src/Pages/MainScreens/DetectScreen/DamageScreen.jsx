import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import UpSvg from './img/up.svg';
import DownSvg from './img/down.svg';
const DamageScreen = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;
  const [searchText, setSearchText] = useState('');
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={[styles.main, {backgroundColor: '#014370'}]}>
      <View style={[styles.container, {height: screenHeight}]}>
        <View style={styles.search}>
          <Text
            style={styles.searchInput}
           
          >Problems</Text>
          {/* <TouchableHighlight onPress={() => {}} style={styles.searchIcon}>
            <SearchIcon />
          </TouchableHighlight> */}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.items}>
            <View style={styles.item}>
              <Text style={styles.itemText}>Graffiti</Text>
              <View style={styles.itemContainer}>
                <View style={styles.itemContainerTexts}>
                  <Text style={styles.itemContainerText}>
                  There are 3 graffiti on the building
                  </Text>
                  <Text style={styles.itemContainerText}>
                    Address: <Text>Baku, Nasimi district, Sabit Rahman 1</Text>
                  </Text>
                </View>

                <View style={styles.itemRight}>
                  <UpSvg width={38} height={38} />
                  <DownSvg width={38} height={38} />
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Pedestrian crossing</Text>
              <View style={styles.itemContainer}>
                <View style={styles.itemContainerTexts}>
                  <Text style={styles.itemContainerText}>
                  The lines of the pedestrian crossing have been removed
                  </Text>
                  <Text style={styles.itemContainerText}>
                    Address: <Text>Baku, Narimanov district, Sharifa 145</Text>
                  </Text>
                </View>

                <View style={styles.itemRight}>
                  <UpSvg width={38} height={38} />
                  <DownSvg width={38} height={38} />
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Bin</Text>
              <View style={styles.itemContainer}>
                <View style={styles.itemContainerTexts}>
                  <Text style={styles.itemContainerText}>
                  There is a bin in the middle of the sidewalk
                  </Text>
                  <Text style={styles.itemContainerText}>
                    Address: <Text>Baku, 3mk round, 121</Text>
                  </Text>
                </View>

                <View style={styles.itemRight}>
                  <UpSvg width={38} height={38} />
                  <DownSvg width={38} height={38} />
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Tree</Text>
              <View style={styles.itemContainer}>
                <View style={styles.itemContainerTexts}>
                  <Text style={styles.itemContainerText}>
                  A tree fell in the middle of the road
                  </Text>
                  <Text style={styles.itemContainerText}>
                    Address: <Text>Baku,Tbilisi district, 111</Text>
                  </Text>
                </View>

                <View style={styles.itemRight}>
                  <UpSvg width={38} height={38} />
                  <DownSvg width={38} height={38} />
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Light</Text>
              <View style={styles.itemContainer}>
                <View style={styles.itemContainerTexts}>
                  <Text style={styles.itemContainerText}>
                  There is a traffic light in the middle of the highway
                  </Text>
                  <Text style={styles.itemContainerText}>
                    Address: <Text>Baku, Nasimi district, Sabit Rahman 2</Text>
                  </Text>
                </View>

                <View style={styles.itemRight}>
                  <UpSvg width={38} height={38} />
                  <DownSvg width={38} height={38} />
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Problem</Text>
              <View style={styles.itemContainer}>
                <View style={styles.itemContainerTexts}>
                  <Text style={styles.itemContainerText}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </Text>
                  <Text style={styles.itemContainerText}>
                    Address: <Text>A.Rajabli 11,  Azerbaijan</Text>
                  </Text>
                </View>

                <View style={styles.itemRight}>
                  <UpSvg width={38} height={38} />
                  <DownSvg width={38} height={38} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#F1F0EC',
    position: 'relative',
  },
  container: {
    backgroundColor: '#F1F0EC',
    paddingHorizontal: 20,
    // paddingVertical: 21,
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
    fontSize: 21,
    fontWeight:"800",
    width: '100%',
    fontFamily: 'Nunito-Bold',
    color: '#014370',
    textAlign:"center"
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
    marginBottom: 37,
    paddingTop: 31,
  },
  item: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: 126,
    borderRadius: 20,
    marginBottom: 31,
  },
  itemText: {
    paddingTop: 10,
    paddingBottom: 5,
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    color: '#014370',
    fontFamily: 'Nunito-ExtraBold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 29,
    paddingLeft: 9,
    paddingVertical: 12,
  },
  itemContainerTexts: {
    flexDirection: 'column',
    maxWidth: '80%',
    gap: 10,
  },
  itemContainerText: {
    fontSize: 19,
    color: '#014370',
    fontWeight: '600',
    fontFamily: 'Nunito-Medium',
  },
  itemRight: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    marginTop: -30,
    flexDirection: 'column',
    gap: 10,
    color: '#014370',
  },
});

export default DamageScreen;
