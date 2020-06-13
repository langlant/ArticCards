import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const CardScreen = ({navigation}) =>{
    //Two buttons underneath a card that displays a card with a picture and description.
    //Previous, Next
    //Add check box to mark mastery
    return(
        <View>
            <Text>Cards</Text>
            <Button
                title="Next"
                style={styles.padding}
                //onPress={() => }
            />
            <Button
                title="Previous"
                style={styles.padding}
                    //onPress={() => navigation.navigate('Customize')}
            />
        </View>
    )
}
/* Each card has the following values:
Image: (url)
Word: basically anything ranging from ball, to baby or mama
Category: each word falls into a category based on the consonants and vowels used
Alpha: each word will use the index of 0 as their alphabetical category. Each alpha word would be uppercased for uniformity in storage
Mastery: this value is added via user input by marking a check box that is either true or false. if true it indicates mastery and
is counted towards the progress screen. Anything not checked is not totaled
*/

export default CardScreen;