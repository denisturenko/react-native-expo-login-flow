import React from 'react';
import {
  Button, View, Text, StyleSheet, Image, ScrollView, Dimensions,
} from 'react-native';
import {
  Header, ButtonGroup,
} from 'react-native-elements';
import { HOME_SCREEN } from '../../constants/routes';
import { assetImages } from '../../../assets/images';
import { fontSize } from '../../constants/theme';

const win = Dimensions.get('window');
const ratio = win.width / 980;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f5f5f5',
    borderBottomColor: '#85106a',
    borderBottomWidth: 1,
    // height: 50,
  },
  headerCenterComponent: {
    color: 'black',
    fontSize: fontSize.TITLE,
  },
  headerImg: {
    width: win.width,
    height: 481 * ratio,
  },
});


export const SignInScreen = props => (
  <View>
    <Header
      placement="left"
      centerComponent={{ text: 'Impact Minds', style: styles.headerCenterComponent }}
      containerStyle={styles.header}
    />
    <ScrollView>
      <Image
        source={assetImages.header}
        style={styles.headerImg}
      />
      <ButtonGroup
        onPress={() => {}}
        buttons={['SIGN IN', 'SIGN UP']}
        selectedIndex={0}
        containerStyle={{
          // backgroundColor: 'transparent',
          borderWidth: 0,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          backgroundColor: 'white',
        }}
        selectedTextStyle={{ color: '#85106a' }}
        selectedButtonStyle={{
          backgroundColor: 'transparent',
          borderTopColor: 'transparent',
          borderBottomColor: '#85106a',
          borderBottomWidth: 1,
        }}
      />

      <View style={styles.container}>
        <Text>this is a Sign In screen</Text>
        <Button
          title="Go to Home12"
          onPress={() => props.navigation.navigate(HOME_SCREEN)}
        />
      </View>
    </ScrollView>

  </View>
);

export default SignInScreen;
