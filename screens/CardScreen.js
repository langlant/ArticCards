import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";



//general formatting and importing of the deck. Probably put shuffle function here with imported array
//Next and previous buttons should bascially refresh page and give next or previous card
//mastery probably will require setupArticListener (this needs clarification though)
//Deck will be imported here and the information from SettingScreen will be imported here as well
const CardScreen = ({navigation}) =>{
    
    const { currentSettings, passDeck } = route.params;
    
    const renderMastery = ({index, item}) =>{
        return(
            <CheckBox
                title={'Mastered?'}
                checked={!this.state.checked}
                onPress={() => {
                    let newArr = [...articType];
                    newArr[index] = {...item, mastery: !item.mastery}
                }}
            />
        )
    }

    /*
    function buildDeck() {
        if a card's  (aType == alType && cType == arType) && (addCV == true && addAlpha == true)
        var deck = [];

       for ( var i = 0; i < firebase.length; i++){
            if( (firebase[i].cType == arType) && (addCV == true)){
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
        <View>
            <Text>Cards</Text>
            <Card
                title={item.word}  
                image={{imageUrl: item.imageUrl}}                  
            >
                <Text>{item.cType}</Text>
            </Card>

            <View style={styles.row}>
                <Button
                    title='Next'
                />
                renderItem{renderMastery}
                <Button
                    title='Previous'
                />
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 1
    },

})

export default CardScreen;