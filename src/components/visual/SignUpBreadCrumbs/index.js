import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import { Badge } from 'react-native-elements';
import styles from './styles';

const SignUpBreadCrumbs = ({
  isSecondBadgePrimary, isThirdBadgePrimary,
}) => {
  const secondBadgeStyle = {
    ...styles.badgePrimary,
    ...(isSecondBadgePrimary ? {} : styles.badgeSecondary),
  };
  const secondTextStyle = {
    ...styles.textPrimary,
    ...(isSecondBadgePrimary ? {} : styles.textSecondary),
  };
  const thirdBadgeStyle = {
    ...styles.badgePrimary,
    ...(isThirdBadgePrimary ? {} : styles.badgeSecondary),
  };
  const thirdTextStyle = {
    ...styles.textPrimary,
    ...(isThirdBadgePrimary ? {} : styles.textSecondary),
  };
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Badge value="1" badgeStyle={styles.badgePrimary} />
        <Text style={styles.textPrimary}>General Info</Text>
      </View>
      <View style={styles.cell}>
        <View style={styles.hr} />
      </View>
      <View style={styles.cell}>
        <Badge value="2" badgeStyle={secondBadgeStyle} />
        <Text style={secondTextStyle}>Additional</Text>
        <Text style={secondTextStyle}>Info -</Text>
        <Text style={secondTextStyle}>Begin</Text>
      </View>
      <View style={styles.cell}>
        <View style={styles.hr} />
      </View>
      <View style={styles.cell}>
        <Badge value="3" badgeStyle={thirdBadgeStyle} />
        <Text style={thirdTextStyle}>Additional Info - End</Text>
      </View>
    </View>

  );
};

SignUpBreadCrumbs.propTypes = {
  isSecondBadgePrimary: PropTypes.bool,
  isThirdBadgePrimary: PropTypes.bool,
};

SignUpBreadCrumbs.defaultProps = {
  isSecondBadgePrimary: false,
  isThirdBadgePrimary: false,
};


export default SignUpBreadCrumbs;
