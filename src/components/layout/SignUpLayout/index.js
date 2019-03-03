import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, ScrollView } from 'react-native';
import {
  Header, ButtonGroup,
} from 'react-native-elements';

import { header, headerImg, tabs } from './styles';
import { assetImages } from '../../../../assets/images';

const SignUpLayout = ({
  children, headerTitle, selectedTabIndex, onPressTab,
}) => (
  <View>
    <Header
      placement="left"
      centerComponent={{ text: headerTitle, style: header.centerComponent }}
      containerStyle={header.containerStyle}
    />
    <ScrollView>
      <Image
        source={assetImages.header}
        style={headerImg.style}
      />
      <ButtonGroup
        onPress={onPressTab}
        buttons={['SIGN IN', 'SIGN UP']}
        selectedIndex={selectedTabIndex}
        containerStyle={tabs.containerStyle}
        selectedTextStyle={tabs.selectedTextStyle}
        selectedButtonStyle={tabs.selectedButtonStyle}
      />
      {children}
    </ScrollView>

  </View>
);

SignUpLayout.propTypes = {
  headerTitle: PropTypes.string,
  onPressTab: PropTypes.func.isRequired,
  selectedTabIndex: PropTypes.number,
};

SignUpLayout.defaultProps = {
  headerTitle: 'Impact Minds',
  selectedTabIndex: 0,
};

export default SignUpLayout;
