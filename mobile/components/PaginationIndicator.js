import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

const PaginationIndicator = ({totalPages, currentPage}) => {
    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < totalPages; i++) {
            dots.push(
                <ActivityIndicator
                    key={i}
                    animating={i === currentPage}
                    color={i === currentPage ? 'blue' : 'gray'}
                    style={styles.dot}
                />
            )
        }

        
        return dots;
    }
  return (
    <View style={styles.container}>
        {renderDots()}
        <Button onPress={() => {} }>Turn back to home</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    dot: {
        marginHorizontal: 5
    }
})

export default PaginationIndicator