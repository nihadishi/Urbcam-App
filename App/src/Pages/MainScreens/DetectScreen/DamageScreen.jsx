import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const DamageScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image source={require("./img/bill.png")}/>
        </View>
        <Text style={styles.title}>Zərər analizi</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Ümumi zərər: 693₼</Text>
      </View>

      <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Dəyişdirilmə: {' '}
            <Text style={styles.redText}>-279₼</Text>
          </Text>
          <Text style={styles.infoText}>
            Əmək haqqı: {' '}
            <Text style={styles.boldRedText}>-70₼</Text>
          </Text>
        </View>
        <View style={styles.titleContainer}>
        <LinearGradient
        colors={['#0194CA', '#007852']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          flex: 1,
          borderRadius: 12,
          padding: 2,
          paddingHorizontal: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 17 }}>
          Spoyler (Dəyişim)
        </Text>
      </LinearGradient>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
          Rəng: {' '}
            <Text style={styles.redText}>-135₼</Text>
          </Text>
          <Text style={styles.infoText}>
            Əmək haqqı: {' '}
            <Text style={styles.boldRedText}>-209₼</Text>
          </Text>
        </View>
        <View style={styles.titleContainer}>
        <LinearGradient
        colors={['#0194CA', '#007852']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          flex: 1,
          borderRadius: 12,
          padding: 2,
          paddingHorizontal: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 17 }}>
        Ön hissə (Təmir)
        </Text>
      </LinearGradient>
        </View>
      </View>
    </View>

      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("AreyousureScreen")}}>
        <Text style={styles.buttonText}>Növbəti</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
      width: 393,
      height: 608,
      padding: 24,
      backgroundColor: 'white',
      borderRadius: 8,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      width: 24,
      height: 24,
    },
    title: {
      marginLeft: 8,
      color: 'black',
      fontSize: 18,
      fontFamily: 'Noto Sans',
      fontWeight: '500',
      lineHeight: 24,
    },
    amountContainer: {
      width: 212,
      height: 33,
      padding: 8,
      borderRadius: 20,
      backgroundColor: '#0194CA',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
    },
    amountText: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'Noto Sans',
      fontWeight: '500',
      lineHeight: 24,
    },
    button: {
      width: '100%',
      padding: 8,
      borderRadius: 40,
      borderColor: '#296D84',
      borderWidth: 1,
      marginTop: 116,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#111111',
      fontSize: 17,
      fontFamily: 'Noto Sans',
      fontWeight: '400',
      lineHeight: 24,
    },

    container: {
        width: 327,
        height: 97,
        marginTop:50
      },
      contentContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
      },
      infoContainer: {
        position: 'absolute',
        top: 7,
        left: 12,
        width: '100%',
        padding: 12,
        backgroundColor: 'rgba(14, 189, 141, 0.1)',
        borderRadius: 4,
      },
      titleContainer: {
        position: 'absolute',
        width:154,
        height:24,
        top: -5,
        left: -5,
        padding: 2,
        paddingHorizontal: 8,
        borderRadius: 12,
      },
      infoText: {
        color: '#434343',
        fontSize: 18,
        width:"100%",
        fontFamily: 'Noto Sans',
        fontWeight: '400',
        lineHeight: 27,
        marginBottom: 6,
      },
      redText: {
        color: '#FF0000',
        fontWeight: '500',
      },
      boldRedText: {
        color: '#FF0000',
        fontWeight: '700',
      },
      titleText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Noto Sans',
        fontWeight: '400',
        lineHeight: 17,
      },
  });

export default DamageScreen