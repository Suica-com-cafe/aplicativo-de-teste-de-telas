import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source = {require("../assets/bg_updates.jpg")} style ={styles.backgroundImage}>

                <View style ={styles.titleBar}>
                <Text style ={styles.titleText}>GPS Orbital</Text>
                </View>

                <TouchableOpacity style = {styles.route} onPress={() => this.props.navigation.navigate("Tracker")}>
                <Text style = {styles.routeText}>Rastreador</Text>
                <Image source = {require("../assets/iss_icon.png")} style = {styles.iconImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.route} onPress={() => this.props.navigation.navigate("Meteor")}>
                <Text style = {styles.routeText}>Meteoros</Text>
                <Image source = {require("../assets/meteor_icon.png")} style = {styles.iconImage}></Image>
                </TouchableOpacity>

                </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 10,
        top: -0
    },
    route:{
        backgroundColor: "white",
        flex: 0.2,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        borderRadius: 30,
        borderColor: "gray",
        borderWidth: 4,
    }
});
