import {StyleSheet, Dimensions} from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        color: '#1a8e43',
        fontWeight: 'bold',
        fontSize: 23,
    },
    contentContainer:{
        flexDirection: 'row',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    artist :{
        color: 'white',
    },
    year: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 12,
    },
    soldoutContainer:{
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        padding: 5,
    },
    soldoutTitle: {
        color:'red',
        fontSize: 12,
    },
    album: {
        flex: 1,
        fontSize: 12,
        fontStyle: 'italic'
    }
})