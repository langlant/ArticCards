import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
//This page is complete other than some styling
const AboutScreen = ({navigation}) =>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.textmenu}>Disclaimer: </Text>
            <Text style={styles.textsubmenu}>This app was created to be an aid to your child's development. By no means is this meant to replace your child's speech therapy needs. If you feel your child might be experiencing delays in speech, please seek the advice of professionals.</Text>
            <Text style={styles.textsubmenu}>For more information please visit: </Text>
            <Text
                style={styles.textlink}
                onPress={() => Linking.openURL('https://kidshealth.org/en/parents/speech-therapy.html')}
            >
                KidsHealth    
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#E8EAF6',
      flex: 1,
    },
    textmenu: {
      textAlign: 'center',
      fontSize: 40
    },
    textsubmenu:{
      textAlign: 'center',
      fontSize: 20
    },
    textlink:{
        fontSize: 20,
        textAlign: 'center',
        color: 'blue'
    },
})

export default AboutScreen;