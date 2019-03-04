import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import {
  Header,
} from 'react-native-elements';

import styles from './styles';

const MainLayout = ({
  children, headerTitle,
}) => (
  <View>
    <Header
      placement="left"
      containerStyle={styles.header}
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: headerTitle, style: styles.headerCenter }}
      rightComponent={{ icon: 'more-vert', color: '#fff' }}
    />
    <ScrollView style={styles.scroll}>
      {children}
    </ScrollView>

  </View>
);

MainLayout.propTypes = {
  headerTitle: PropTypes.string,
};

MainLayout.defaultProps = {
  headerTitle: 'Impact Minds',
};

export default MainLayout;
