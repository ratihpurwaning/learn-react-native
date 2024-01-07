/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {countryList, objectImageList, objectNameList} from '../../data/Data';

const GuessTheCountryScreen = props => {
  const [answer, setAnswer] = useState('');
  const [index, setIndex] = useState();
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const {navigation} = props;
  const randomIndex = () => {
    const pickRandomIndex = Math.floor(Math.random() * countryList.length);
    setIndex(pickRandomIndex);
  };
  const checkAnswer = () => {
    if (answer.toLowerCase() === countryList[index]) {
      setResult('true');
      setScore(score + 10);
    } else {
      setResult('false');
    }
    setTimeout(() => {
      setResult('');
      randomIndex();
    }, 1500);
  };
  useEffect(() => {
    if (score === 10) {
      navigation.navigate('Win');
    }
  }, [score]);
  useEffect(() => {
    const homePage = navigation.addListener('focus', () => {
      randomIndex();
      setScore(0);
    });
    return homePage;
  }, []);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {/* <ScrollView> */}
      {/* //BUAT TAMPILAN SCORE */}
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            margin: 8,
            // marginBottom: 10,
            padding: 4,
            alignItems: 'flex-start',
            // borderWidth: 1,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 26,
              color: 'green',
            }}>
            Score : {score}
          </Text>
        </View>
        {/* //BUAT TAMPILAN HOME */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontSize: 28,
              fontFamily: 'serif',
              marginBottom: 16,
            }}>
            Guess The Country
          </Text>
          <Image
            style={{
              width: 250,
              height: 250,
              borderRadius: 10,
            }}
            source={{uri: objectImageList[index]}}
          />
          <View
            style={{
              margin: 8,
              backgroundColor: 'lavender',
              padding: 4,
              borderWidth: 1,
            }}>
            <Text style={{fontSize: 18}}>{objectNameList[index]}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              margin: 8,
            }}>
            <TextInput
              style={{
                borderWidth: 1,
                width: '50%',
              }}
              placeholder="Write your answer"
              keyboardType="default"
              onChangeText={text => setAnswer(text)}
            />
            <TouchableOpacity
              style={{
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                padding: 8,
                marginLeft: 8,
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: 'skyblue',
              }}
              onPress={() => checkAnswer()}>
              <Text style={{fontSize: 18}}>Submit</Text>
            </TouchableOpacity>
          </View>
          <Text>{result}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default GuessTheCountryScreen;
