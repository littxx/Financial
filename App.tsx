import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>ola</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
