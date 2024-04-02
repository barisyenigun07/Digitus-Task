import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-paper'
import DigitusLogo from '../assets/DigitusLogo.png'
import Intro1Image from '../assets/intro1.png'
import Intro2Image from '../assets/intro2.png'
import Intro3Image from '../assets/intro3.png'
import PaginationIndicator from '../components/PaginationIndicator';

const Intro = ({navigation}) => {
  const [step, setStep] = useState(1);
  
  const handlePress = () => {
    if (step === 3) {
      navigation.navigate('Home');
    }
    else {
      setStep(step + 1);
    }
  }
  return (
    <View style={styles.container}>
        <Image source={DigitusLogo}/>
        <Image source={(step === 1) ? Intro1Image : (step === 2) ? Intro2Image : Intro3Image} width={550}/>
        <Text style={styles.title}>Enim ad minim</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Button mode='contained' style={styles.button} onPress={handlePress}>
            {step === 1 || step === 2 ? 'İleri': 'Giriş'}
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  },
  title: {
    color: "green",
    fontSize: 24,
    marginTop: 20
  },
  text: {
    fontSize: 19,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 8
  },
  button: {
    backgroundColor: "green",
    width: 350
  }
})

export default Intro