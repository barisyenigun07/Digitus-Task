import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Card, Text, IconButton } from "react-native-paper";

const PostCard = ({post, onPress}) => {
  return (
    <Card style={styles.container} onPress={onPress}>
        <Card.Cover source={post.captionPhoto}/>
        <Card.Content>
            <Text variant='titleLarge' style={styles.title}>{post.title}</Text>
            <View style={styles.content}>
              <View style={styles.categoryBorder}>
                <Text variant='bodyMedium' style={styles.category}>{post.category}</Text>
              </View>
              <View style={styles.subContents}>
                <IconButton icon="calendar-blank-outline" style={styles.icon}/>
                <Text variant='bodyMedium'>{post.publishedDate}</Text>
              </View>
              <View style={styles.subContents}>
                <Text variant='bodyMedium' style={{color: "red"}}>{post.liked}</Text>
                <IconButton icon="cards-heart-outline" iconColor='red' style={styles.icon}/>
              </View>
            </View>
        </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    margin: 10
  },
  title: {
    color: "green",
    marginTop: 10
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center"
  },
  categoryBorder: {
    borderColor: "green",
    borderRadius: 20,
    borderWidth: 0.5,
    width: 100,
    padding: 5
  },
  category: {
    color: "green",
    textAlign: "center"
  },
  subContents: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 30,
    height: 25,
    marginBottom: 1
  }
})

export default PostCard