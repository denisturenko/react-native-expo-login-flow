import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import {
  Header, Icon,
} from 'react-native-elements';

import styles from './styles';

const MainLayout = ({
  children, headerTitle, onClickLogout,
}) => (
  <View>
    <Header
      placement="left"
      containerStyle={styles.header}
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: headerTitle, style: styles.headerCenter }}
      rightComponent={(<Icon name="exit-to-app" color="#fff" onPress={onClickLogout} />)}
    />
    <ScrollView style={styles.scroll}>
      {children}
    </ScrollView>

  </View>
);

MainLayout.propTypes = {
  headerTitle: PropTypes.string,
  onClickLogout: PropTypes.func.isRequired,
};

MainLayout.defaultProps = {
  headerTitle: 'Impact Minds',
};

export default MainLayout;
