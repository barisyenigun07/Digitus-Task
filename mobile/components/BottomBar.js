import React, { useState } from 'react'
import {Appbar, useTheme} from "react-native-paper"
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context"

const BOTTOM_APPBAR_HEIGHT = 50;


const BottomBar = () => {
  const [selectedIcon, setSelectedIcon] = useState(0);
  const { bottom } = useSafeAreaInsets();

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: "white",
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action style={(selectedIcon === 0) ? styles.icon : null} icon="home-variant-outline" iconColor={`${selectedIcon === 0 ? 'white' : 'green'}`} onPress={() => {setSelectedIcon(0)}} />
      <Appbar.Action style={(selectedIcon === 1) ? styles.icon : null} icon="book-open-outline" iconColor={`${selectedIcon === 1 ? 'white' : 'green'}`}  onPress={() => {setSelectedIcon(1)}} />
      <Appbar.Action style={(selectedIcon === 2) ? styles.icon : null} icon="account-multiple" iconColor={`${selectedIcon === 2 ? 'white' : 'green'}`} onPress={() => {setSelectedIcon(2)}}/>
      <Appbar.Action style={(selectedIcon === 3) ? styles.icon : null} icon="bell-ring-outline" iconColor={`${selectedIcon === 3 ? 'white' : 'green'}`} onPress={() => {setSelectedIcon(3)}} />
      <Appbar.Action style={(selectedIcon === 4) ? styles.icon : null} icon="menu" iconColor={`${selectedIcon === 4 ? 'white' : 'green'}`} onPress={() => {setSelectedIcon(4)}} />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  icon: {
    backgroundColor: "green",
  }
});
  

export default BottomBar