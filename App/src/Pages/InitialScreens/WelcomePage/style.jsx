import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#12202F',
      },
      onboardingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      backgroundContainer: {
        width: 393,
        height: 852,
        borderRadius: 50,
        overflow: 'hidden',
      },
      gradientContainer: {
        width: 393,
        height: 334,
        borderRadius: 50,
        overflow: 'hidden',
        position: 'absolute',
        top: 518,
        left: 0,
      },
      indiContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 393,
        height: 334,
        justifyContent: 'center',
        alignItems: 'center',
      },
      onboardingText: {
        color: '#FFFFFF',
        fontSize: 40,
        fontFamily: 'Noto Sans',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
      },
      checkButton: {
        width: 200,
        height: 44,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#0DA0D4',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      checkButtonText: {
        color: '#000000',
        fontSize: 22,
        fontFamily: 'Noto Sans',
        fontWeight: '700',
      },
      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
      },
      imageContainer: {
        position: 'absolute',
        top: 120,
        width: 500,
        height: 500,
        overflow: 'hidden',
      },
      backgroundImage: {
        flex: 1,
        width: undefined,
        height: undefined,
      },
      gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
    
})