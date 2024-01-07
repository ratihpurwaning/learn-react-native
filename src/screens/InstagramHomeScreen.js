/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {Feed} from './components/InstagramComponent';
import {Story} from './components/InstagramComponent';
const InstagramHomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'gainsboro',
        }}>
        <Text
          style={{
            fontFamily: 'StyleScript-Regular',
            fontSize: 40,
            marginLeft: 16,
            // marginBottom: 10,
          }}>
          Instagram
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 8,
          }}>
          <View style={{margin: 8}}>
            <Icon name="plus-square-o" type="font-awesome" size={26} />
          </View>
          <View style={{margin: 8}}>
            <Icon name="paper-plane-outline" type="ionicon" size={26} />
          </View>
          <View style={{margin: 8}}>
            <Icon name="heart-o" type="font-awesome" size={26} />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 10}}>
          <ScrollView horizontal>
            <Story
              profile={require('../../Asset/images/pikachu.png')}
              username="ratihpurwaning93"
            />
            <Story
              profile={require('../../Asset/images/kocet.png')}
              username="ratnajele"
            />
          </ScrollView>
        </View>
        <Feed
          profile={require('../../Asset/images/pikachu.png')}
          username="ratihpurwaning93 with deva.jayantha"
          post={require('../../Asset/images/profile.jpeg')}
          caption=" ily"
        />
        <Feed
          profile={require('../../Asset/images/flareon.png')}
          username="deva.jayantha with ratihPurwaning93"
          post={require('../../Asset/images/profile.jpeg')}
          caption=" ily"
        />
        <Feed
          profile={require('../../Asset/images/kocet.png')}
          username="ratnajele"
          post={require('../../Asset/images/withTorry.jpeg')}
          caption=" iri sama Torry bisa liburan :("
        />
      </ScrollView>
    </View>
  );
};

export default InstagramHomeScreen;
