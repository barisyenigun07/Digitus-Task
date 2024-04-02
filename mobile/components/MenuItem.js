import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from "react-native-paper";

const MenuItem = ({item}) => {
  return (
    <View style={styles.container}>
        <Avatar.Image style={styles.image} size={55} source={item.photo}/>
        <Text style={styles.itemText}>{item.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        width: 70,
        flexDirection: "column",
        alignContent: "center",
        
    },
    image: {
        marginLeft: 8
    },
    itemText: {
        fontSize: 12,
        color: "gray",
        textAlign: "center"
    }
})

export default MenuItem