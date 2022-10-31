import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {

  const [courseGoals, setCousreGoals] = useState([]);
  const [isModalVisible, setModalValue] = useState(false);

  function addGoalHandler(enteredGoalText) {
    const newCourseGoal = { text: enteredGoalText, key: Math.random().toString() };
    setCousreGoals((currentCourseGoals) => [...currentCourseGoals, newCourseGoal])
    console.log(newCourseGoal)
  }

  function makeModalVisible(){
    setModalValue(true);
  }

  function makeModalInVisible(){
    setModalValue(false);
  }


  function deleteItem(id) {
    console.log(id)
    console.log("0.26394514615292675" !== id)
    setCousreGoals(courseGoals => {
      return courseGoals.filter((goal) => {
        console.log(goal)
        const cond = goal.key !== id;
        console.log(cond)
        return cond;

      })
    })
  }

  return (
    <View style={styles.container}>
      <Button title='Add new goal' onPress={makeModalVisible}/>
      <GoalInput addGoalHandler={addGoalHandler} makeModalInVisible={makeModalInVisible} isModalVisible={isModalVisible} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(item) => {
            return (<GoalItem text={item.item.text} deleteFunc={deleteItem} id={item.item.key} />);
          }} />
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
