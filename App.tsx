import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import {store} from '@redux/store';
import {MainStackNavigation} from '@navigation/screens/main-stack-navigation';
import {Loading} from '@components/shared/loading';

function App() {
  return (
    <Provider store={store}>
      <MainStackNavigation />
      <Loading />
    </Provider>
  );
}

export default App;
