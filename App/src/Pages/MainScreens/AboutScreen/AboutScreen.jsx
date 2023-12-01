import {View, Text, ScrollView, TouchableHighlight} from 'react-native';
import React from 'react';
import MenuItemScreenHeader from '../../../layouts/MenuItemScreenHeader/MenuItemScreenHeader';
import {styles} from './style';
import { Image } from 'react-native-animatable';
const AboutScreen = () => {
  return (
    <View>
      <MenuItemScreenHeader name="About us" />
      <View style={styles.main}>
        <Text style={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          perspiciatis ea vel, a laborum culpa dolor eligendi minus, repellendus
          iste quam incidunt adipisci accusamus id atque ut omnis eos libero!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi
          quisquam amet repellat dignissimos autem quaerat recusandae illum
          harum ipsa accusantium obcaecati aperiam eum consectetur, at tempore
          quos ab! Perferendis.{' '}
        </Text>
        <Text style={styles.teamText}>Our Team</Text>
        <View style={styles.teams}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.teamItems}>
            <TouchableHighlight
              onPress={() => {}}
              style={styles.teamItem}
              underlayColor="#000">
              <Image style={{objectFit:"contain", width:151, height:251}}
              source={require("../../../assets/img/teamPhoto/aykhan.png")}/>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {}}
              style={styles.teamItem}
              underlayColor="#000">
              <Image style={{objectFit:"contain", width:151, height:251}}
              source={require("../../../assets/img/teamPhoto/fidan.png")}/>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {}}
              style={styles.teamItem}
              underlayColor="#000">
              <Image style={{objectFit:"contain", width:151, height:251}}
              source={require("../../../assets/img/teamPhoto/nihad.png")}/>
            </TouchableHighlight>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;
