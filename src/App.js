import React, {useState} from "react"
import { View, FlatList, StyleSheet } from "react-native"
import musicData from "./music-data.json"
import Card from "./components/SongCard"
import SearchBar from "./components/SearchBar"

const App = () => {

  const [songList, setSongList] = useState(musicData)

  const renderSong = ({ item }) => <Card item={item} />
  const renderSeparator = () => <View style={styles.separator}/>

  const findSong = (text) => {
    const filterList = musicData.filter(song => {
      const fixedText = text.toLowerCase()
      const fixedTitle = song.title.toLocaleLowerCase()
      return fixedTitle.indexOf(fixedText) > -1
    })
    setSongList(filterList)
  }

  return (
    <View style={styles.container}>
      <SearchBar findSong={findSong}/>
      <FlatList
        data={songList}
        keyExtractor={item => item.id}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  separator: {
    borderWidth: 1,
    borderColor: '#3a4509',
  }
})

export default App