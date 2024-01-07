/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';

export const InputComponent = props => {
  const {title, height, keyboard} = props;
  return (
    <View>
      <Text
        style={{
          marginTop: 12,
          marginBottom: 12,
          //   marginLeft: 15,
          //   marginRight: 15,
        }}>
        {title}
      </Text>
      <TextInput
        style={{
          padding: 10,
          borderWidth: 4,
          height: height,
          fontSize: 16,
          borderRadius: 10,
          //   marginLeft: 15,
          //   marginRight: 15,
        }}
        keyboardType={keyboard}
        multiline={true}
        {...props}
      />
    </View>
  );
};
