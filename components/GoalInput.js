import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoal);
    props.endAddModalHandler();
    setEnteredGoal("");
  }

  function cancelAddGoalHandler() {
    props.endAddModalHandler();
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={enteredGoal}
          onChangeText={goalInputHandler}
          style={styles.textInputContainer}
          placeholder="Your Course Goal !"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={cancelAddGoalHandler}
              title="Cancel"
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 15,
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInputContainer: {
    width: "100%",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
    margin: 40,
  },
  image: {
    width: 100,
    height: 100,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 16,
  },
});

export default GoalInput;
