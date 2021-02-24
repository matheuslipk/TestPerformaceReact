import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('InputsTradicional')}>
          <Text style={styles.textBtn}>Inputs Tradicional</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('InputsHookState')}>
          <Text style={styles.textBtn}>Inputs Hookstate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    padding: 5,
    backgroundColor: '#738',
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Home;
