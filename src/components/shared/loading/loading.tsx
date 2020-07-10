import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';

import styles from './style';
import {LoadingState} from '@redux/loading/loading.reducer';
import {useSelector} from 'react-redux';
import {AppStates} from '@redux/store/root-reducer';

export const Loading = () => {
  // Given selector to get state from store
  const selector = (state: AppStates): LoadingState => state.loading;

  // Use selector to get state from store
  const {isLoading} = useSelector<AppStates, LoadingState>(selector);

  return isLoading ? (
    <Modal isVisible={isLoading} backdropOpacity={0.66} hasBackdrop={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator size={30} color="#31A7F5" />
        </View>
      </View>
    </Modal>
  ) : null;
};
