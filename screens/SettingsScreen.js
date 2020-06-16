import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Text, CheckBox} from "react-native-elements";
import {FlatList } from "react-native-gesture-handler";
//this is broken some how can't figure out why.



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
        const [articType, setArticType] = useState([
            {arType: 'CV', addCV: true},
            {arType: 'VC', addCV: true},
            {arType: 'VV', addCV: true},
            {arType: 'VCV', addCV: true},
            {arType: 'CVCV', addCV: true},
            {arType: 'C1V1C1V2', addCV: true},
            {arType: 'C1V1C2V2', addCV: true},
        ]);

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
                    currentSetting: articType
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
                title={item.arType}
                checked={item.addCV}
                onPress={() => {
                    let newArr = [... articType];
                    newArr[index] = {...item, addCV: !item.addCV};
                    setArticType(newArr);
                    console.log(newArr);
                }}
            />
        )
    }
/*
    const renderAlphaType = ({index, item}) =>{
        
        return(
            <CheckBox
                title={item.alType}
                checked={item.addAlpha}
                onPress={() => {
                    updateArtic({...item, aType: !item.addAlpha});
                }}
            />
        )
    }
            //This code was originally in return but moved for commenting
            //This portion complicates things unneccessarily
    
            <Text style={styles.textmenu}>Alphabet Type</Text>
            <Text style={styles.textsubmenu}> Select what words to include based on their starting letter</Text>
            <FlatList  
                keyExtractor={(item) => item.alType}
                data={alphaType}
                renderItem={renderAlphaType}
            />

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
      fontSize: 30
    },
    textsubmenu:{
      textAlign: 'center',
      fontSize: 15
    },
});

export default SettingsScreen;