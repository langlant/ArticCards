import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";


const HomeScreen = ({navigation}) => {
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
            <Feather
              style={styles.headerButton}
              name="settings"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        ),
      });

    return(
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Text>Welcome to Artic Cards</Text>
                    <Text>Press Start to Begin!</Text>
                    <Button
                    title="Start"
                    onPress={() => navigation.navigate('Cards')}
                    />
                    <Button
                    titel="Progress"
                    onPress={() => navigation.navigate('Progress')}
                    />
                    <Button
                    title="Customize"
                    onPress={() => navigation.navigate('Customize')}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default HomeScreen;