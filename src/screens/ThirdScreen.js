/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const ThirdScreen = () => {
  return (
    // <ScrollView>
    <View
      style={{
        backgroundColor: 'mistyrose',
        flex: 1,
        flexDirection: 'row',
      }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          Pikachu
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'orange',
          flex: 1,
        }}>
        <Text>Flareon</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
        }}>
        <Text>Rapidash</Text>
      </View>
    </View>
  );
};

//IMAGE

const AddImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      {/* <ScrollView horizontal={true}> */}
      <View style={{margin: 20, padding: 8}}>
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'blue',
            backgroundColor: 'aliceblue',
            margin: 15,
          }}
          source={require('../../Asset/images/pikachu.png')}
        />
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'green',
            margin: 15,
            backgroundColor: 'aliceblue',
          }}
          source={require('../../Asset/images/flareon.png')}
        />
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'green',
            margin: 15,
            backgroundColor: 'aliceblue',
          }}
          source={require('../../Asset/images/rapidash.png')}
        />
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'green',
            margin: 15,
            backgroundColor: 'aliceblue',
          }}
          source={{uri: 'https://i.ibb.co/bLz74hj/psyduck.png'}}
        />
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'green',
            margin: 15,
            backgroundColor: 'aliceblue',
          }}
          source={{uri: 'https://i.ibb.co/GQBLC7r/bulbasaur.png'}}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default AddImage;
