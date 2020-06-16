import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown";
import { storeArtic, setupArticListener, initArticDB } from '../helpers/fb-settings';
//Cannot navigate to this page, not sure why



const CustomScreen = ({ route, navigation }) =>{
    //create a screen with the ability to add a picture with text to the deck of artic cards
    //add check box solution for selection of word type (maybe bubbles, ask about this)
    const articDrop = [
        {value: 'CV'},
        {value: 'VC'},
        {value: 'VV'},
        {value: 'VCV'},
        {value: 'CVCV'},
        {value: 'C1V1C1V2'},
        {value: 'C1V1C2V2'},
    ];

    const [articCard, setCard] = useState({
        word: '',
        imageUrl: '',
        aType:'',
        cType: '',
        mastery: false
    })

    const updateStateObject = (vals) => {
        setCard({
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <Text>Please enter the information of your custom card!</Text>
                <Input
                    placeholder="Enter valid image url"
                    value={articCard.imageUrl}
                    autoCorrect={false}
                    onChangeText={(val) => setCard({ imageUrl: val })}
                />        
                <Input
                    placeholder="Enter word or phrase"
                    value={articCard.word}
                    autoCorrect={false}
                    onChangeText={(val) => 
                        setCard({ word: val, aType: val.charAt(0).toUpperCase(), mastery: false})
                    }
                />
                <Dropdown
                    value={articCard}
                    onChangeText={(text) => setCard({cType: text})}
                    label="Artic Type"
                    data={articDrop}
                />
                <Button
                //this will save the cards to the database
                    title="Save"
                    onPress={() => 
                        storeArtic({word, aType, cType, imageUrl, mastery})
                    } 
                />
                <Button
                    title="Clear"
                    onPress={() =>
                        setCard({word: '', aType: '', cType: '', imageUrl: '', mastery: false}),
                        navigation.navigate('Home')
                    }
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

  
export default CustomScreen;