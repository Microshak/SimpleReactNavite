import React, { Component } from 'react';
import {  FlatList, Alert, AppRegistry, Button, StyleSheet, View, Text ,TouchableNativeFeedback,Platform } from 'react-native';

export default class App extends React.Component {
  
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    this._onPressButton = this._onPressButton.bind(this)
  }

  
  _onPressButton() {
    fetch('[Your URL Here]')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.data)
      
      this.setState({
        isLoading: false,
        dataSource: responseJson.data,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });


  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ backgroundColor: 'powderblue', height:60, paddingTop:30, alignItems:'center'}} >
        <Text  style={styles.bold}>Armored Things Demo</Text>
        </View>
        <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.RoomNumber}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
        
        <Text>Shake your phone to open the developer menu.</Text>
         <View style={{flex: 1, backgroundColor: 'white'}} >
        
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
            color="#841584"
          >
           <View style={styles.button}>
            <Text style={styles.buttonText}>Find A Room</Text>
          </View>
          
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
            color="#841584"
          > 
           <View style={styles.button1}>
            <Text style={styles.buttonText}>Report a room</Text>
          </View>
          
          </TouchableNativeFeedback>

          </View>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex:1,
     fontWeight: 'bold',
     backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'purple'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
