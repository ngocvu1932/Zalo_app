import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        backgroundColor: '#009AFA',
    },

    header: {
        width: '100%',
        height: 55,
        backgroundColor: '#009AFA',
        justifyContent: 'center'
    },

    pressBack: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
        height: 40,
        // backgroundColor: 'red',
        // justifyContent: 'center'
    },

    txtInHeader: {
        fontSize: 21,
        color: '#F1FFFF',
        marginLeft: 10,
        marginBottom: 2
    }, 
    
    body: {
        flex: 1,
        backgroundColor: '#F1F2F4',
        paddingBottom: 100,
    },

    viewAccount:{
        height: 163,
        width: '100%',
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'blue',
    },

    txtTitle :{
        fontSize: 17,
        color: '#07439B',
        fontWeight: '500',
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 15
    },

    textBirthDay: {
        fontSize: 18,
        flex: 1,
        marginLeft: 15
    },

    pressBirthDay: {
        // backgroundColor: 'red', 
        height: 55, 
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    viewSecutity: {
        marginTop: 9,
        height: 222,
        width: '100%',
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'blue'
    },


    txtAllOne: {
        fontSize: 17,
    },

    txtName: {
        fontSize: 20,
        fontWeight: '500',
    },

    viewChild: {
        marginLeft: -165,
    },

    txtChild: {
        fontSize: 18,
    },

    viewLogin: {
        marginTop: 9,
        height: 107,
        width: '100%',
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'blue'
    },

    line1: {
        height: 2,
        backgroundColor: '#FFFFFF',
        width: '15%'
    },

    line2: {
        height: 2,
        backgroundColor: '#F1F2F4',
        width: '85%'
    },

    line: {
        flexDirection: 'row'
    },

    viewSearchAndF: {
        marginTop: 9,
        height: 189,
        width: '100%',
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'blue'
    },

    button: {
        alignSelf: 'center',
        backgroundColor: '#A8ADB1',
        borderRadius: 15,
        height: 25,
        width: 45,
        marginRight: 20,
        justifyContent: 'center'
      },

      circleButton: {
        height: 20, width: 20, 
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginLeft: 2
      },

      circleButton1: {
        height: 20, width: 20, 
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginLeft: 23
      },

      toggledButton: {
        backgroundColor: 'blue',
      },

      buttonText: {
        color: 'white',
      },

      viewEnd: {
        marginTop: 9,
        height: 107,
        width: '100%',
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'blue'
      }

    
    
})