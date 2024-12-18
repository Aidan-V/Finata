import { TouchableOpacity,Pressable, Image, StyleSheet, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link, Redirect } from 'expo-router'
import React from 'react'

const OpeningScreen = () => {
  return (
    <View style ={styles.homeContainer}>
        <Image source = {require('@/assets/images/logo.png')} style = {{width: 340, height: 290}}/>
        <StatusBar style="dark" />
        <TouchableOpacity>
            <Link href="/(start)/log-in" asChild>
                <Pressable style = {styles.logIn}>
                    <Text style = {styles.font}>Login</Text>
                </Pressable>
            </Link>
        </TouchableOpacity>

        <TouchableOpacity>
            <Link href="/(start)/sign-up" asChild>
                <Pressable onPress={() => {}}style = {styles.signUp}>
                    <Text style = {styles.font}>Sign Up</Text>
                </Pressable>
            </Link>
        </TouchableOpacity>
        <Link href="/(tabs)/home" style ={styles.bottomText} replace> Go to Home Screen </Link>
    </View>
  )
}

export default OpeningScreen
const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: "#FFF7D3",
        alignItems: "center",
        justifyContent: "center",
    },
    logIn: {
        backgroundColor: "#FBD143",
        paddingVertical: 15,
        paddingHorizontal: 150,
        borderRadius: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 2,
    },
    signUp: {
        backgroundColor: "#FBD143",
        paddingVertical: 15,
        paddingHorizontal: 142,
        borderRadius: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 2,
        
    },
    ButtonPress: {
        backgroundColor: "#FBD143",
        paddingVertical: 15,
        paddingHorizontal: 150,
        borderRadius: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 2,
        opacity: 0.5,
    },
    font: {
        color: "black",
        fontSize: 20,
        fontFamily: "Trochi",
    },
    bottomText: {
        position: 'absolute', 
        bottom: 20, 
        left: 0,
        right: 0,
        textAlign: 'center', 
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        textDecorationLine: 'underline',
    },
    
    });