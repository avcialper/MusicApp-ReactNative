import React, { useCallback } from "react"
import { View, Text, Image, Linking } from "react-native"
import styles from "./SongCard.styles"

const Card = ({ item }) => {



    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: item.imageUrl }}
            />
            <View style={styles.innerContainer}>
                <Text style={styles.title} onPress={() => Linking.openURL(item.youtubeUrl)}>{item.title}</Text>
                <View style={styles.contentContainer}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.artist}>{item.artist}</Text>
                        <Text style={styles.year}>{item.year}</Text>
                    </View>
                    {
                        item.isSoldOut && <View style={styles.soldoutContainer}>
                            <Text style={styles.soldoutTitle}>TÜKENDİ</Text>
                        </View>
                    }
                </View>
                <Text style={styles.album}>{item.album}</Text>
            </View>
        </View>
    )
}

export default Card