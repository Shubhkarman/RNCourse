import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {

    function deleteItem(){
        props.deleteFunc(props.id)
    }

    return (
        <Pressable onPress={deleteItem}>
            <View style={styles.goalItem} >
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>);
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 10,
        borderRadius: 6,
        backgroundColor: '#5e0acc',

    },
    goalText: {
        color: 'white'
    }
});


export default GoalItem;