import Intro from './screens/Intro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import PostDetail from './screens/PostDetail';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Intro' component={Intro}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Post Detail' component={PostDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
