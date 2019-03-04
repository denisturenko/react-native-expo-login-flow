import React, { Component } from 'react';
import { Text, Card } from 'react-native-elements';

import MainLayout from '../../components/layout/MainLayout';

export class HomeScreen extends Component {
  render() {
    return (
      <MainLayout>
        <Text h3>Feed</Text>
        <Card
          image={require('../../../assets/images/header.jpg')}
        >
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce commodo vulputate enim, et ultrices ipsum gravida elementum.
            Donec sed augue sem.
            Vivamus lectus arcu, tempus ac vestibulum quis, placerat ut tortor.
            Aliquam eros erat, pulvinar pellentesque orci vel, luctus condimentum quam.
            Mauris elementum ultricies turpis ac sodales.
            Donec quis fringilla dui.
            Phasellus consectetur mi non dictum malesuada.
            Aliquam a metus rutrum, sollicitudin nulla vitae, luctus nulla.
            Ut maximus quam quis blandit bibendum.
          </Text>
        </Card>
      </MainLayout>

    );
  }
}

export default HomeScreen;
