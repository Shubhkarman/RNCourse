import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import { useState } from 'react';


export function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.addGoalHandler(enteredGoalText);
        setEnteredGoalText('')
    }


    return (
        <Modal visible={props.isModalVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/favicon.png')}/>
                <TextInput
                    placeholder='Your goal'
                    style={styles.textInput}
                    value={enteredGoalText}
                    onChangeText={goalInputHandler}
                ></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add goal' onPress={addGoalHandler} color='#999999'></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.makeModalInVisible} color='#999999'></Button>
                    </View>


                </View>
            </View>
        </Modal>
    );
}




const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        backgroundColor: '#311b6e'
    },
    textInput: {
        borderWidth: 1,
        boarderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
        color: '#FFFFFF'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }

});


