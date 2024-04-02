import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavBar from '../components/NavBar';
import { createServer } from 'miragejs';
import BottomBar from '../components/BottomBar';
import PostCard from '../components/PostCard';
import MenuBar from '../components/MenuBar'

if (window.server) {
  server.shutdown();
}


window.server = createServer({
  routes() {
    this.get("/api/contents", () => {
      return {
        contents: [
          { 
            id: 1, 
            title: "Enim ad minim",
            category: "Duis aute", 
            captionPhoto: require("../assets/kadincalisan.png"),
            publishedDate: "21.05.2020", 
            liked: 1058
          },
          {
            id: 2, 
            title: "Nisibus satis ipi",
            category: "Duis aute", 
            captionPhoto: require("../assets/fabrika.png"), 
            publishedDate: "23.05.2020", 
            liked: 1023
          }
        ]
      }
    })
  }
})


const Home = ({navigation}) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("/api/contents")
      .then(res => res.json())
      .then(data => setContents(data.contents))
      .catch(err => console.error(err))
  }, [])

  return (
        <SafeAreaProvider>
          <NavBar/>
          <MenuBar/>
          <ScrollView>
          <View style={styles.container}>
            {contents.map((content) => (
              <PostCard
                key={content.id}
                post={content}
                onPress={() => navigation.navigate('Post Detail')}
              />
            ))}
          </View>
          </ScrollView>
          <BottomBar/>
        </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
      padding: 1.5
    }
  });

export default Home;
