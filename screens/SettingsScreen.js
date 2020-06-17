import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Text, CheckBox} from "react-native-elements";
import {FlatList } from "react-native-gesture-handler";
//this is broken some how can't figure out why.

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

    return(
        <View style={styles.container}>
            <Text style={styles.textmenu}>Artic Type</Text>
            <Text style={styles.textsubmenu}>Select what words to include based on their consonants and vowels</Text>
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
    headerButton: {
        color: '#fff',
        fontWeight: 'bold',
      },
});

export default SettingsScreen;