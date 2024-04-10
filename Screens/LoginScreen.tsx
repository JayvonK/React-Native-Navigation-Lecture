import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginFormComponent from '../Components/LoginFormComponent'

const LoginScreen = () => {
  return (
    <ImageBackground source={require('../assets/Rowdyruffboys.webp')}
    style={styles.background}
    >

        <View>
            <LoginFormComponent />
        </View>

    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})