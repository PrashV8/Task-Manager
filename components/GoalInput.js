import { useState } from 'react';
import {
  View, 
  TextInput, 
  Button, 
  StyleSheet, 
  Modal, 
  Image

} from 'react-native';



function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }
      
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }



    return   (  
      <Modal visible={props.visible} animationType="slide" >
    <View style={styles.inputContainer}>
    <Image style={styles.image} source={require('../assets/images/goal.png')} />
    <TextInput 
    style={styles.textInput}
     placeholder='Enter Task!'
    onChangeText={goalInputHandler}
    value={enteredGoalText}
    />

    <View style={styles.buttonContainer}>


<View style={styles.button}>
    <Button title="Delete" onPress={props.onCancel} color= "#ff0000"/>
      </View>

      <View style={styles.button}>
 <Button title="Add Task"   onPress={addGoalHandler} color= "#05bdff" />
</View>
    </View>
  </View>
</Modal>
    );
}


export default GoalInput;


const styles = StyleSheet.create({

    inputContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor:'#7983c1'
      },
image: {
width:100,
height:100,
margin: 20

},
textInput:{
  borderWidth:1,
  borderColor:'#f1ebee',
  backgroundColor:'#f1ebee',
  color:'#120438',
  borderRadius:6,
  width:'100%',
  padding:16,

},

      buttonContainer : {
        marginTop: 16,
        flexDirection:'row'
      },
      button:{
        width:'100',
        marginHorizontal:8
      }

});