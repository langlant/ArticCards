import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { storeArtic, setupArticListener, initArticDB } from '../helpers/fb-settings';


const HomeScreen = ({navigation}) => {
  
  useEffect(() => {
    try {
      initArticDB();
    } catch (err) {
      console.log(err);
    }
  }, []);
  
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
                    <Text style={styles.textmenu}>Welcome to Artic Cards</Text>
                    <Text style={styles.textsubmenu}>Press Start to Begin!</Text>
                    <Button
                    title="Start"
                    style={styles.buttons}
                    onPress={() => navigation.navigate('Cards')}
                    />
                    <Button
                    title="Progress"
                    style={styles.buttons}
                    onPress={() => navigation.navigate('Progress')}
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
  resultsGrid: {
    borderColor: '#000',
    borderWidth: 1,
  },
  resultsRow: {
    flexDirection: 'row',
    borderColor: '#000',
    borderBottomWidth: 1,
  },
  resultsLabelContainer: {
    borderRightWidth: 1,
    borderRightColor: '#000',
    flex: 1,
  },
  resultsLabelText: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  resultsValueText: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;