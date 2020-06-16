import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import { updateArtic } from "../helpers/fb-settings";
//Cannot navigate to this page, not sure why

//general formatting and importing of the deck. Probably put shuffle function here with imported array
//Next and previous buttons should bascially refresh page and give next or previous card
//mastery probably will require setupArticListener (this needs clarification though)
//Deck will be imported here and the information from SettingScreen will be imported here as well
const CardScreen = ({route, navigation}) =>{
    
    const { currentSettings, passDeck } = route.params;
    
    const renderCard = ({index, item}) => {
        <View>
            <Card
            title={item.word}
            image={{uri: item.imageUrl}}>
                <Text> {item.cType} </Text>
            </Card>
        </View>
    }
    const renderMastery = ({index, item}) =>{
        return(
            <CheckBox
                title={'Mastered?'}
                checked={!item.mastery}
                onPress={() => {
                    updateArtic({ ...item, mastery: !item.mastery });
                }}
            />
        )
    }

    
    function buildDeck() {
        var deck = [];
       for ( var i = 0; i < passDeck.length; i++){
            if( (passDeck[i].cType == arType) && (addCV == true)){
                deck.push(passDeck[i]);
            }
            return deck;
       }
    }
    
    buildDeck();

    /*
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