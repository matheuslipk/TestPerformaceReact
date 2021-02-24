import {useState} from '@hookstate/core';
import axios from 'axios';
import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface ResponseGit {
  id: number;
  avatar_url: string;
  name: string;
}

const AsyncState = () => {
  const url = 'https://api.github.com/users/matheuslipk';

  const fetchResource = () => axios.get(url).then((response) => response.data);

  const state = useState<ResponseGit>(fetchResource);

  if (state.promised) {
    return <Text>Promissed</Text>;
  }

  if (state.error) {
    return <Text>ERROR</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={{uri: state.avatar_url.get()}}
        />
        <Text style={{fontSize: 20}}>{state.nested('name').get()}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    padding: 5,
    backgroundColor: '#738',
    marginTop: 10,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
  },
});

export default AsyncState;
