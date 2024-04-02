import React from 'react'
import { View, StyleSheet } from 'react-native'
import MenuItem from './MenuItem'

const menuItems = [
    {id: 1, label: "Günün Menüsü", photo: require("../assets/story_yemektenevar.png")},
    {id: 2, label: "Bayram Kutlaması" ,photo: require("../assets/kadincalisan.png")},
    {id: 3, label: "Digitus Anket", photo: require("../assets/anket.png")},
    {id: 4, label: "Duyuru ve Genelgeler", photo: require("../assets/konteyner.png")},
    {id: 5, label: "Bugün Doğanlar", photo: require("../assets/story_dogum.png")},
    {id: 6, label: "Aramıza Katılanlar", photo: require("../assets/story_aramizakatilan.png")}
];


const MenuBar = () => {
  return (
    <View style={styles.container}>
        {menuItems.map((menuItem) => {
            return (
                <MenuItem key={menuItem.id} item={menuItem}/>
            )
        })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: 450,
    height: 100,
    padding: 10,
    backgroundColor: "white"
  }
})

export default MenuBar