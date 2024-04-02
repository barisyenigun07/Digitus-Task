import React from 'react'
import { Appbar } from 'react-native-paper';
import { Image, StyleSheet } from 'react-native';
import DigitusLogo from "../assets/DigitusLogo.png"
import MagnifyIcon from "../assets/search.png"
import UserIcon from "../assets/person.png"

const NavBar = () => {
  return (
        <Appbar.Header style={styles.header}>
            <Appbar.Action
                icon={() => (
                    <Image
                        source={MagnifyIcon}
                    />
                )}  
                onPress={() => {}}
            />
            <Image source={DigitusLogo}/>
            <Appbar.Action
                icon={() => (
                    <Image
                        source={UserIcon}
                    />
                )} 
                onPress={() => {}}
            />
        </Appbar.Header>
    
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        backgroundColor: "#fff",
        shadowRadius: 2
    },
    logo: {
        marginTop: 10,
        width: 550,
        height: 10
    }
})

export default NavBar