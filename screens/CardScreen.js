import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import { updateArtic } from "../helpers/fb-settings";
import { State } from "react-native-gesture-handler";
//Cannot navigate to this page, not sure why

//general formatting and importing of the deck. Probably put shuffle function here with imported array
//Next and previous buttons should bascially refresh page and give next or previous card
//mastery probably will require setupArticListener (this needs clarification though)
//Deck will be imported here and the information from SettingScreen will be imported here as well
const CardScreen = ({route, navigation}) =>{
    
    const { articType, passDeck } = route.params;
    const {nCard, setNCard} = useState({});

    const renderCard = ({index, item}) => {
        <View>
            <Card
                title={item.word}
                image={{uri: item.imageUrl}}>
                    <Text> 
                        {item.cType} 
                    </Text>
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
    function buildDeck(){
        let deck = new Array();
    
        for(var i = 0; i < passDeck.length; i++){
            for(var j = 0; j < articType.length; j++){
                if((passDeck.cType[i] == articType[j].arType) && (articType[j].addCV == true)){
                    deck.push(passDeck[i]);
                }
            }
        }
        return deck;
    }

    function nextCard(){
        var k = deck.indexOf();
        
        if( (k+1) <= deck.length){
             setNCard(deck[k+1]);
        } else{
            setNCard(deck[0]);
        }

    }

    function previousCard(){
        var k = deck.indexOf();
        
        if( (k-1) >= 0){
            setNCard(deck[k-1]);
        } else{
            setNCard(deck[(deck.length - 1)]);
        }
    }
    
    buildDeck();
    
    return(
        <View>
            <Text>Cards</Text>
            {renderCard(nCard)}
            <View style={styles.row}>
                <Button
                    title='Next'
                    onPress={
                        nextCard()
                    }
                />
                renderItem{renderMastery}
                <Button
                    title='Previous'
                    onPress = {
                        previousCard()
                    }
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