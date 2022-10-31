import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCousreGoals] = useState([]);

function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText)
}


function addGoalHandler() {
  setCousreGoals((currentCourseGoals) => [...currentCourseGoals, 
    {text: enteredGoalText, key: Math.random.toString()}])
  console.log(enteredGoalText)
}
  
  return (
    <View style={styles.container}>
      <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(item) => {
            return (<GoalItem text={item.item.text}/>);
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
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
  goalsContainer: {
    flex: 8
  },
  
});
