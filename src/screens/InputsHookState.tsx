import React from 'react';
import {Text, View} from 'react-native';
import {useState, State} from '@hookstate/core';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getNumberPrimes} from '../utils/prime_numbers';

const InputsHookstate = () => {
  const arrayString = Array.from(Array(10).keys()).map((i) => `Input ${i + 1}`);
  const state = useState(arrayString);

  return (
    <SafeAreaView>
      <JsonDump state={state} />
      <ScrollView>
        {state.map((task, index) => (
          <MyInput fieldState={task} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

function MyInput({fieldState}: {fieldState: State<string>}) {
  const scoped = useState(fieldState);
  const numbers = true && getNumberPrimes(50000);
  return (
    <View style={{display: 'flex', flexDirection: 'column', marginTop: 5}}>
      <TextInput
        value={scoped.get()}
        onChangeText={scoped.set}
        style={{backgroundColor: '#fff', padding: 10}}
      />
      <Text>
        Renderizado em: {new Date().toISOString()} - ({numbers?.length})
      </Text>
    </View>
  );
}

function JsonDump(props: {state: State<string[]>}) {
  const state = useState(props.state);
  return (
    <View>
      <Text>{JSON.stringify(state.get().slice(0, 2), undefined, 4)}</Text>
    </View>
  );
}

export default InputsHookstate;
