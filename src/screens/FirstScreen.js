import React from 'react';
import {View, Text, Button} from 'react-native';

const FirstScreen = () => {
  const openAlert = () => {
    // eslint-disable-next-line no-alert
    alert('tidur!');
  };
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          color: 'green',
        }}>
        Hello World!
      </Text>
      <Text>I'm soooo tired</Text>
      <Button title="capek?" onPress={openAlert} />
    </View>
  );
};
export default FirstScreen;
