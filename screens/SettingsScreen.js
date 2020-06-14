import React, { StyleSheet, useState, useKeyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, useEffect } from "react";
import { Text, Keyboard, CheckBox } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { route, navigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { storeArtic, setupArticListener, initArticDB, updateArtic } from '../helpers/fb-settings';

const articType = [
    {arType: 'CV', addCV: true},
    {arType: 'VC', addCV: true},
    {arType: 'VV', addCV: true},
    {arType: 'VCV', addCV: true},
    {arType: 'CVCV', addCV: true},
    {arType: 'C1V1C1V2', addCV: true},
    {arType: 'C1V1C2V2', addCV: true},
];

const alphaType = [
    {alType: 'A', addAlpha: true},
    {alType: 'B', addAlpha: true},
    {alType: 'C', addAlpha: true},
    {alType: 'D', addAlpha: true},
    {alType: 'E', addAlpha: true},
    {alType: 'F', addAlpha: true},
    {alType: 'G', addAlpha: true},
    {alType: 'H', addAlpha: true},
    {alType: 'I', addAlpha: true},
    {alType: 'J', addAlpha: true},
    {alType: 'K', addAlpha: true},
    {alType: 'L', addAlpha: true},
    {alType: 'M', addAlpha: true},
    {alType: 'N', addAlpha: true},
    {alType: 'O', addAlpha: true},
    {alType: 'P', addAlpha: true},
    {alType: 'Q', addAlpha: true},
    {alType: 'R', addAlpha: true},
    {alType: 'S', addAlpha: true},
    {alType: 'T', addAlpha: true},
    {alType: 'U', addAlpha: true},
    {alType: 'V', addAlpha: true},
    {alType: 'W', addAlpha: true},
    {alType: 'X', addAlpha: true},
    {alType: 'Y', addAlpha: true},
    {alType: 'Z', addAlpha: true}
];

const SettingsScreen = ({route, navigation}) =>{
        //create a screen with checkbox fields. One for the consonant-vowel field and the other for the alphabet.
        //Both of which will be using flatlists preferably side by side
        //A card will only be counted if it meets both values being marked true (category and alpha)

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.headerButton}> Cancel </Text>
            </TouchableOpacity>
        ),
        headerLeft: () => (
            <TouchableOpacity
            onPress={() => {
                // navigate back with new settings.
                navigation.navigate('Home', {
                    
                });
            }}
            >
            <Text style={styles.headerButton}> Save </Text>
            </TouchableOpacity>
        ),
    });    

    const renderCVType = ({index, item}) =>{
        
        return(
            <CheckBox
                title={item.cType}
                checked={item.addCV}
                onPress={() => {
                    updateArtic({...item, addCV: !item.addCV});
                }}
            />
        )
    }

    const renderAlphaType = ({index, item}) =>{
        
        return(
            <CheckBox
                title={item.aType}
                checked={item.addAlpha}
                onPress={() => {
                    updateArtic({...item, aType: !item.addAlpha});
                }}
            />
        )
    }

    /*
    function buildDeck() {
        if a card's  (aType == alType && cType == arType) && (addCV == true && addAlpha == true)
        var deck = [];

       for ( var i = 0; i < firebase.length; i++){
            if( (firebase[i].aType == alType && firebase[i].cType == arType) && (addCV == true && addAlpha == true)){
                deck.push(firebase[i]);
            }
            return deck;
       }
    }
    
    function shuffle(o) {
	    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
    };
    */



    return(
        <View style={styles.container}>
            <Text style={styles.textmenu}>Artic Type</Text>
            <Text style={styles.textsubmenu}>Select what words to include based on their cononants and vowels</Text>
            <FlatList  
                keyExtractor={(item) => item.arType}
                data={articType}
                renderItem={renderCVType}
            />
            <Text style={styles.textmenu}>Alphabet Type</Text>
            <Text style={styles.textsubmenu}> Select what words to include based on their starting letter</Text>
            <FlatList  
                keyExtractor={(item) => item.alType}
                data={alphaType}
                renderItem={renderAlphaType}
            />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#E8EAF6',
      flex: 1,
    },
    textmenu: {
      textAlign: 'center',
      fontSize: 20
    },
    textsubmenu:{
      textAlign: 'center',
      fontSize: 5
    },
});

export default SettingsScreen;