import React from 'react'
import PostDetailImage from '../assets/post_detail_image.png'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import BottomBar from '../components/BottomBar'

const PostDetail = () => {
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
            <ScrollView>
            <Image source={PostDetailImage} style={styles.image}/>
            <View style={styles.textContainer}>
                <View style={styles.categoryBorder}>
                    <Text style={styles.category}>Duis aute</Text>
                </View>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
            </ScrollView>
        </View>
        <BottomBar/>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignContent: "center"
    },
    image: {
        width: 450,
        height: 295
    },
    category: {
        color: "green",
        textAlign: "center"
    },
    categoryBorder: {
        marginBottom: 20,
        marginTop: 10,
        borderColor: "green",
        borderRadius: 20,
        borderWidth: 0.5,
        width: 100,
        padding: 5
    },
    textContainer: {
        borderRadius: 10,
        padding: 12
    },
    text: {
        fontSize: 16,
        marginBottom: 5
    }
})

export default PostDetail