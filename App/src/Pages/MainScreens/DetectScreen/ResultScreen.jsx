import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ResultScreen = () => {
  const navigation = useNavigation();
  const handleNextPress = () => {
    navigation.navigate('DamageScreen');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('./img/afterai.jpeg')}
        resizeMode="contain"
        style={styles.selectedImage}
      />
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        impedit quasi atque molestias eos dicta odio praesentium fugiat qui
        necessitatibus tempore culpa id perspiciatis eum iste esse, temporibus
        laborum assumenda!
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 300,
        }}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleNextPress}>
          <View style={styles.buttonInnerContainer}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F1F0EC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'gray',
    marginHorizontal:10,
    marginTop:10,
    borderRadius:10,
    borderWidth:1,
    padding:20,
    borderColor:"gray"
  },
  button: {
    backgroundColor: '#296D84',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 23,
  },
  selectedImage: {
    width: 300,
    height: 300,
    marginTop: 16,
    borderRadius: 8,
    overlayColor:"#F1F0EC"

  },
  buttonContainer: {
    marginTop: 52,
    width: 345,
    height: 58,
    paddingTop: 6,
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:"#000", 
    gap: 4,
    display: 'flex',
  },
  buttonInnerContainer: {
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    lineHeight: 24,
    // wordWrap: 'break-word',
  },
});

export default ResultScreen;
