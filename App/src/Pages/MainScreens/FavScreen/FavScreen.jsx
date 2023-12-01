import {View, Text, ScrollView, TouchableHighlight} from 'react-native';
import React from 'react';
import MenuItemScreenHeader from '../../../layouts/MenuItemScreenHeader/MenuItemScreenHeader';
import { styles } from './style';

const FavScreen = () => {
  return (
    <View>
      <MenuItemScreenHeader name="Liked" />
      <View style={styles.offers}>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          style={styles.offerItems}>
          <TouchableHighlight
            onPress={() => {}}
            style={styles.offerItem}
            underlayColor="#014370">
            <View></View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            style={styles.offerItem}
            underlayColor="#014370">
            <View></View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            style={styles.offerItem}
            underlayColor="#014370">
            <View></View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            style={styles.offerItem}
            underlayColor="#014370">
            <View></View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            style={styles.offerItem}
            underlayColor="#014370">
            <View></View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    </View>
  );
};

export default FavScreen;
