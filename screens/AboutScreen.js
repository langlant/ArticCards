import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback, Linking } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const AboutScreen = ({navigation}) =>{
    
    return(
        <View>
            <Text>This app was created to be an aid to your child's development. By no means is this meant to replace your child's speech therapy needs. If you feel your child might be experiencing delays in speech, please seek the advice of professionals.</Text>
            <Text>For more information please visit: </Text>
            <Text
                style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://kidshealth.org/en/parents/speech-therapy.html')}
            >
                KidsHealth    
            </Text>
        </View>
    )
}

export default AboutScreen;