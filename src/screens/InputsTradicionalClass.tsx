import * as React from 'react';
import {Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const arrayString = Array.from(Array(10).keys()).map((i) => `${i}`);
class InputsTradicional extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      numbers: arrayString,
    };
  }

  updateState = (newValue: string, index: number) => {
    const stateCopy = Array.from(this.state.numbers);
    stateCopy[index] = newValue;
    this.setState({
      ...this.state,
      numbers: stateCopy,
    });
  };

  render() {
    return (
      <SafeAreaView>
        <JsonDump state={this.state} />
        <ScrollView>
          {this.state.numbers.map((field: string, index: number) => (
            <MyInput
              field={field}
              key={index}
              index={index}
              updateState={this.updateState}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const MyInputMemo = React.memo((props: any) => <MyInput {...props} />);

class MyInput extends React.PureComponent {
  render() {
    return (
      <View style={{display: 'flex', flexDirection: 'column', marginTop: 5}}>
        <TextInput
          value={this.props.field}
          onChangeText={(t) => this.props.updateState(t, this.props.index)}
          style={{backgroundColor: '#fff', padding: 10}}
        />
        <Text>Updated At: {new Date().toISOString()}</Text>
      </View>
    );
  }
}

function JsonDump({state}: any) {
  return (
    <View>
      <Text>{JSON.stringify(state.numbers.slice(0, 4), undefined, 4)}</Text>
    </View>
  );
}

export default InputsTradicional;
