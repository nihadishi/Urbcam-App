import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#F1F0EC',
        paddingTop: 29,
        width: '100%',
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
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      goBack: {
        width: '50%',
        height: 45,
        paddingLeft:14
      },
      createAccount: {
        width: '100%',
        textAlign: 'center',
        fontSize: 30,
        color: '#014370',
        fontFamily:"Nunito-Black"
        
      },
      client: {
        paddingHorizontal: 33,
        paddingVertical: 6,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#014370',
        height:37
      },
      clientText:{
        color: 'white',
        fontSize: 17,
        fontFamily:"Nunito-Bold"

    
      },
      inputArea:{
        width:"100%",
        flexDirection:"column",
        gap: 20,
        marginTop:15
      },
      input:{
        borderWidth: 1,
        borderColor: '#014370',
        borderRadius: 12,
        width:"100%",
        height:42,
        paddingHorizontal:7,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        position:"relative"
      },
      inputNumberArea: {
        flexDirection: 'row',
        gap:29
      },
      inputNumberCountry: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#014370',
        borderRadius: 12,
        height:42,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
      },
      inputNumberInput: {
        flex: 4,
        borderWidth: 1,
        borderColor: '#014370',
        borderRadius: 12,
        height:42,
        justifyContent:"center",
        paddingHorizontal: 5,
      },
      inputpswd:{
        // position:"absolute",
        // top:"19%",
        right:6
      },
      nextButton: {
        backgroundColor: '#014370',
        width: 130,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#014370',
        borderRadius: 10,
        elevation: 4,
        marginTop:10
      },
      buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontFamily:"Nunito-Bold"
      },
      haveAnAccount:{
        flexDirection:"row",
        justifyContent:"space-between",
      },
      goToLogin:{
        flexDirection:"column",
        gap:16,
        paddingTop:16,
        alignItems:"center"
        
      },
      needy:{
        alignItems:"center",
        justifyContent:"center",
        width:"70%",
        height:200,
        overflow:"hidden"
    },
    needyImage:{
        width:"100%",
        height:"100%",
        objectFit:"contain"        
    },
    toast:{
     width:"100%",
     position:"absolute",
     top:0,
     left:0
    }
})