import * as React from 'react';
import {Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getNumberPrimes} from '../utils/prime_numbers';

const InputsTradicional = () => {
  const arrayString = Array.from(Array(10).keys()).map((i) => `${i}`);
  const [state, setState] = React.useState(arrayString);
  return (
    <SafeAreaView>
      <JsonDump state={state} />
      <ScrollView>
        {state.map((field, index) => (
          <MyInput
            state={state}
            key={index}
            index={index}
            setState={setState}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

function MyInput({state, index, setState}: any) {
  // const [field, setField] = React.useState(state[index]);
  const updateState = (newValue: string) => {
    const stateCopy = Array.from(state);
    stateCopy[index] = newValue;
    setState(stateCopy);
  };

  const numbers = getNumberPrimes(50000);

  return (
    <View style={{display: 'flex', flexDirection: 'column', marginTop: 5}}>
      <TextInput
        value={`${state[index]}`}
        onChangeText={updateState}
        style={{backgroundColor: '#fff', padding: 10}}
      />
      <Text>
        Updated At: {new Date().toISOString()} - ({numbers.length})
      </Text>
    </View>
  );
}

function JsonDump({state}: {state: string[]}) {
  return (
    <View>
      <Text>{JSON.stringify(state.slice(0, 4), undefined, 4)}</Text>
    </View>
  );
}

export default InputsTradicional;
