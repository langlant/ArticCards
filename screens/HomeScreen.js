import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback, Image, CheckBox } from "react-native";
import { Button } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import {FlatList } from "react-native-gesture-handler";
import { initArticDB, setupArticListener } from '../helpers/fb-settings';


const HomeScreen = ({route, navigation}) => {
  const [ deck, setDeck] = useState([]);

  const [articType, setArticType] = useState([
    {arType: 'CV', addCV: true},
    {arType: 'VC', addCV: true},
    {arType: 'VV', addCV: true},
    {arType: 'VCV', addCV: true},
    {arType: 'CVCV', addCV: true},
    {arType: 'C1V1C1V2', addCV: true},
    {arType: 'C1V1C2V2', addCV: true},
]);

  
  useEffect(() => {
    try {
      initArticDB();
    } catch (err) {
      console.log(err);
    }
    setupArticListener((items) => {
      setDeck(items);
    });
  }, []);

  useEffect(() => {
    if(route.params?.articCard){
      setCard(route.params.articCard)
    }
    if(route.params?.deck){
      setDeck(route.params.deck)
    }
    if(route.params?.articType){
      setArticType(route.params.articType)
    }

  }, [route.params?.deck, route.params?.articCard, route.params?.articType] );
  
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
  navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Settings')
            }
          >
            <Feather
              style={styles.headerButton}
              name="settings"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('About')
            }
          >
            <Text style={styles.headerButton}> About </Text>
          </TouchableOpacity>
        ),
      });

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.textmenu}>
            Welcome to Artic Cards
          </Text>
          <Text style={styles.textsubmenu}>
            Press Start to Begin!
          </Text>
          <Image source={require('../assets/5-snowflake-png-image.png')}
            style={{width: 300, height: 300, alignSelf: 'center'}}/>
          <Button
            title="Start"
            style={styles.buttons}
            onPress={() => navigation.navigate('Cards',
            {deck, articType})}
          />
          <Button
            title="Customize"
            style={styles.buttons}
            onPress={() => navigation.navigate('Customize')}
          />

        </View>
      </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#E8EAF6',
    flex: 1,
    justifyContent: 'center'
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
    margin: 10,
  },
  buttons: {
    padding: 10,
  },
  inputError: {
    color: 'red',
  },
  input: {
    padding: 10,
  },
});

export default HomeScreen;