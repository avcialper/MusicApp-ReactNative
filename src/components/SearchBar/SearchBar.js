import React from "react"
import {View, TextInput} from "react-native"
import styles from "./SearchBar.styles"
import Icon from "react-native-vector-icons/AntDesign"

const SearchBar = ({findSong}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder={'Ne dinlemek istiyorsun?'}
                onChangeText={findSong}
            />
            <Icon 
                name="search1"
                style={styles.icon}
            />
        </View>
    )
}

export default SearchBar