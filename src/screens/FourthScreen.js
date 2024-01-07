/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {InputComponent} from './components/InputComponent';

const FourthScreen = () => {
  return (
    <ScrollView>
      <View style={{margin: 16}}>
        <ImageBackground
          style={{
            width: '100%',
            height: 300,
            justifyContent: 'flex-end',
            alignItems: 'center',
            //   opacity: 0.2,
          }}
          imageStyle={{borderRadius: 8, opacity: 0.6}}
          source={{
            uri: 'https://i.pinimg.com/564x/76/1f/df/761fdf82be34c332bcc3da175abf62a2.jpg',
          }}>
          <Text
            style={{
              backgroundColor: 'mistyrose',
              padding: 8,
              margin: 8,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Disneyland
          </Text>
        </ImageBackground>
        <Text style={{marginTop: 12, marginBottom: 12, fontWeight: 'bold'}}>
          Description
        </Text>
        <TextInput
          style={{
            padding: 5,
            borderWidth: 4,
            height: 40,
            fontSize: 20,
            //   margin: 50,
          }}
          placeholder="About this place"
          multiline={true}
          keyboardType="default"
        />
        <InputComponent
          title="Phone Number"
          height={40}
          placeholder="08x xxx xxx xxx"
          keyboard="default"
        />
        <InputComponent
          title="Location"
          height={40}
          placeholder="Jl..."
          keyboard="phone-pad"
        />
      </View>
    </ScrollView>
  );
};
export default FourthScreen;
