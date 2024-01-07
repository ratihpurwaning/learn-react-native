/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// eslint-disable-next-line no-unused-vars
const SecondScreen = () => {
  const openAlert = (game) =>{
    if (game === 'mobileLegends'){
    alert('You choose Mobile Legends!');
    } else if (game === 'pubg'){
      alert('You choose PUBG!');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#8FBC8F',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
      style ={{
        backgroundColor:'lavender',
        padding : 20,
        margin : 10,
        borderWidth : 5,
        borderColor : 'blue',
        borderStyle: 'solid',
        borderRadius: 2,
      }}>
        <Text style= {{
          fontFamily: 'Roboto',
          textAlign: 'center',
          fontWeight:'bold',
        }}>Mobile Legends</Text>
          <Text style= {{
          fontFamily: 'Roboto',
          textAlign: 'center',
          fontWeight:'bold',
        }}>
            Moblie Legends
              <Text>is a multiplayer online battle arena (MOBA) game. The two
              opposing teams fight to reach and destroy the enemy's base while defending
              their own base for control of a path.</Text>
        </Text>
      </View>
      <View>
        <TouchableOpacity
        style={{
          backgroundColor:'grey',
          padding:8,
          margin: 8,
          borderRadius: 10,
          borderWidth:3,
        }}
        onPress={ () => openAlert('mobileLegends')}>
          <Text style={{
            color:'lightcoral',
          }}>
            Mobile Legends Button
          </Text>
        </TouchableOpacity>
      </View>

      <View
      style ={{
        backgroundColor:'skyblue',
        padding : 20,
        margin : 10,
        borderWidth : 5,
        borderColor : 'red',
        borderStyle: 'dashed',
        borderRadius: 2,
      }}>
        <Text style= {{
          color:'green',
          fontFamily: 'Roboto',
          textAlign: 'center',
          fontWeight:'bold',
        }}>PUBG </Text>
        <Text>PlayerUnknown's Battlegrounds, better known as PUBG, is a multiplayer battle royale
game in which players drop onto an island and fight to be the last one left standing.</Text>
      </View>
      <View>
        <TouchableOpacity
        style={{
          backgroundColor:'grey',
          padding:8,
          margin: 8,
          borderRadius: 10,
          borderWidth:3,
        }}
        onPress={ () => openAlert('pubg')}>
          <Text style={{
            color:'lightcoral',
          }}>
            PUBG Button
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//CHALENGE



const ChallengeScreen = () => {
  return (
  <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'lavender',
  }}>
    <View>
        <Text
        style={{
          color: 'darkblue',
          textAlign:'center',
          fontWeight:'bold',
          textDecorationLine:'underline',
        }}>
          iOS
        </Text>
    </View>
    <View style ={{
      backgroundColor:'khaki',
      padding : 10,
      margin : 10,
      borderWidth : 3,
      borderColor : 'blue',
      borderStyle: 'dotted',
      borderRadius: 20,
    }}>
        <Text>
            <Text style={{
              color: 'purple',
            }}>iOS (formerly iPhone OS)
            </Text>
        is a mobile operating
        system created and developed by Apple Inc.
        exclusively for its hardware. It is the operating
        system that powers many of the company's mobile
        devices, including the iPhone and iPod Touch.
        </Text>
    </View>
    <View>
        <Text style={{
          fontWeight:'bold',
          marginBottom: 20,
        }}>
          VS.
        </Text>
    </View>
    <View >
        <Text style={{
          color: 'darkgreen',
          textAlign:'center',
          fontWeight:'bold',
          textTransform:'uppercase',
          textDecorationLine:'underline',
        }}>
        Android
        </Text>
    </View>
    <View style={{
    backgroundColor:'pink',
    padding : 20,
    margin : 10,
    borderWidth : 5,
    borderColor : 'blue',
    borderStyle: 'dotted',
    borderRadius: 20,
    }}>
        <Text>
        Android is a mobile operating system based on a
        modified version of the Linux kernel and other open
        source software, designed primarily for
        touchscreen mobile devices such as smartphones and
        tablets. Android is developed by a consortium of
        developers known as the Open Handset Alliance and
        commercially sponsored by Google.
        </Text>
    </View>
  </View>
  );
};
export default ChallengeScreen;
