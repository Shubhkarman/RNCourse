import {View, TextInput, Button, StyleSheet} from 'react-native'


export function GoalInput(props) {
    return (
    <View style={styles.inputContainer}>
        <TextInput placeholder='Your goal' style={styles.textInput} onChangeText={props.goalInputHandler}></TextInput>
        <Button title='Add goal' onPress={props.addGoalHandler}></Button>
    </View>);
}


const styles = StyleSheet.create({
  
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      borderBottomWidth: 1,
    },
    textInput: {
      borderWidth: 1,
      boarderColor: '#cccccc',
      width: '70%',
      marginRight: 8,
      padding: 8
    },
    
  });
  

