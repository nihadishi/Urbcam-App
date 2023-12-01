import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import Footer from '../../../layouts/Footer/Footer';
import {styles} from './style';
import SearchIcon from './img/search.svg';
import {Image} from 'react-native-animatable';
const RecentPage = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;
  const [searchText, setSearchText] = useState('');
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={[styles.main, {backgroundColor: '#014370'}]}>
      <View style={[styles.container, {height: screenHeight}]}>
        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            placeholder="Axtar.."
            placeholderTextColor="#014370"
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
          <TouchableHighlight onPress={() => {}} style={styles.searchIcon}>
            <SearchIcon />
          </TouchableHighlight>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.items}>
            <View style={styles.item}>
              <View style={styles.itemContainer}>
                  <Image
                    style={{flex: 1, width: 103, height: 103}}
                    resizeMode="contain"
                    source={require('../../../assets/img/foryou/1.png')}
                  />
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.itemContainer}>
                  <Image
                    style={{flex: 1, width: 103, height: 103}}
                    resizeMode="contain"
                    source={require('../../../assets/img/foryou/2.png')}
                  />
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.itemContainer}>
                  <Image
                    style={{flex: 1, width: 103, height: 103}}
                    resizeMode="contain"
                    source={require('../../../assets/img/foryou/3.jpg')}
                  />
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.itemContainer}>
                  <Image
                    style={{flex: 1, width: 103, height: 103}}
                    resizeMode="contain"
                    source={require('../../../assets/img/foryou/4.jpg')}
                  />
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.itemContainer}>
                <Image
                  style={{flex: 1, width: 103, height: 103}}
                  resizeMode="contain"
                  source={require('../../../assets/img/foryou/5.jpg')}
                />
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.itemContainer}>
                  <Image
                    style={{flex: 1, width: 103, height: 103}}
                    resizeMode="contain"
                    source={require('../../../assets/img/foryou/2.png')}
                  />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Footer value={3} />
    </ScrollView>
  );
};

export default RecentPage;
