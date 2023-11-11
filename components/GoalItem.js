import { StyleSheet, Text, Pressable, View } from "react-native";

function GoalItem(props) {
  function deleteGoalHandler() {
    props.onDeleteGoalHandler(props.id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color:"#dddddd" }}
        onPress={deleteGoalHandler}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 10,
    color: "white",
  },
});

export default GoalItem;
