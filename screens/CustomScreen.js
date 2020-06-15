import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown";
import { route, navigation } from "@react-navigation/native";
import { storeArtic, setupArticListener, initArticDB } from '../helpers/fb-settings';
//Cannot navigate to this page, not sure why

const articType = [
    {cType: 'CV'},
    {cType: 'VC'},
    {cType: 'VV'},
    {cType: 'VCV'},
    {cType: 'CVCV'},
    {cType: 'C1V1C1V2'},
    {cType: 'C1V1C2V2'},
];

const CustomScreen = ({route, navigation}) =>{
    //create a screen with the ability to add a picture with text to the deck of artic cards
    //add check box solution for selection of word type (maybe bubbles, ask about this)

    const [articCard, setCard] = useState({
        word: '',
        imageUrl: '',
        aType:'',
        cType: '',
        mastery: false
    })

    const updateStateObject = (vals) => {
        setState({
          ...state,
          ...vals,
        });
      };

    useEffect(() => {
        setupArticListener((items) => {
            setCard(items);
        });
    })

    useEffect(() => {
        if(route.params?.articCard){
            setCard({imageUrl: state.imageUrl, word: state.word, aType: state.aType, cType: state.cType, mastery: state.mastery})
        }
    }, [route.params?.articCard]);

    return(
        <View>
            <Text>Please enter the information of your custom card!</Text>
            <Input
                placeholder="Enter valid image url"
                value={articCard.imageUrl}
                autoCorrect={false}
                onChangeText={(val) => updateStateObject({ imageUrl: val })}
            />        
            <Input
                placeholder="Enter word or phrase"
                value={articCard.word}
                autoCorrect={false}
                onChangeText={(val) => 
                    updateStateObject({ word: val, aType: val.charAt(0).toUpperCase(), mastery: false})
                }
            />
            <Dropdown
                value={articType}
                onChangeText={(text) => updateStateObject({cType: text})}
                label="Artic Type"
                data={articType}
            />
            <Button
                title="Save"
                onPress={() => 
                    storeArtic({word, aType, cType, imageUrl, mastery})
                } //this will save the cards to the database
            />
            <Button
                title="Clear"
                onPress={() =>
                    updateStateObject({word: '', aType: '', cType: '', imageUrl: '', mastery: false}),
                    navigation.navigate('Home')
                }
            />
        </View>
    )
}

  
export default CustomScreen;