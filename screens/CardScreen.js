import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card, Checkbox } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

//general formatting and importing of the deck. Probably put shuffle function here with imported array
//Next and previous buttons should bascially refresh page and give next or previous card
//mastery probably will require setupArticListener (this needs clarification though)

const CardScreen = ({navigation}) =>{

    const renderMastery = ({index, item}) =>{
        return(
            <CheckBox
                title={'Mastered?'}
                checked={!this.state.checked}
                onPress={() => {
                    //let newArr = [...articType];
                    //newArr[index] = {...item, addCV: !item.addCV}
                }}
            />
        )
    }

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