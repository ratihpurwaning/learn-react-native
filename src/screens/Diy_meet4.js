/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground, TextInput, ScrollView} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import {InputComponent} from './components/InputComponent';

const DiyMeeting4 = () => {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <ImageBackground
          style={{
            // width: '100%',
            // height: '100%',
            flex: 1,
            justifyContent: 'center',
          }}
          imageStyle={{opacity: 0.3}}
          source={{
            uri: 'https://i.pinimg.com/564x/76/1f/df/761fdf82be34c332bcc3da175abf62a2.jpg',
          }}>
          <View
            style={{
              alignItems: 'flex-start',
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
          </View>
          <View style={{margin: 5, padding: 8}}>
            <Text
              style={{
                marginTop: 12,
                marginBottom: 2,
                fontWeight: 'bold',
              }}>
              Description
            </Text>
            <TextInput
              style={{
                padding: 10,
                borderWidth: 4,
                height: 140,
                fontSize: 30,
              }}
              placeholder="About this place"
              multiline={true}
              keyboardType="default"
            />
            <InputComponent
              title="Phone Number"
              height={40}
              placeholder="08x xxx xxx xxx"
              keyboardType="phone-pad"
            />
            <InputComponent
              title="Location"
              height={40}
              placeholder="Jl..."
              keyboardType="default"
            />
            <InputComponent
              title="Location"
              height={100}
              placeholder="Jl..."
              keyboardType="default"
            />
            <InputComponent
              title="Location"
              height={100}
              placeholder="Jl..."
              keyboardType="default"
            />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
export default DiyMeeting4;
