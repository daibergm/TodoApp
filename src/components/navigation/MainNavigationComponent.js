import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Body,
  Text,
  Icon,
} from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const AllToDo = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>All</Title>
        </Body>
      </Header>
      <Content>
        <Text>All Section</Text>
      </Content>
    </Container>
  );
};

const ActiveToDo = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Active</Title>
        </Body>
      </Header>
      <Content>
        <Text>Active Section</Text>
      </Content>
    </Container>
  );
};

const CompletedToDo = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Completed</Title>
        </Body>
      </Header>
      <Content>
        <Text>Completed Section</Text>
      </Content>
    </Container>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    All: AllToDo,
    Active: ActiveToDo,
    Completed: CompletedToDo,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'All') {
          iconName = 'list';
        } else if (routeName === 'Active') {
          iconName = 'unlock';
        } else {
          iconName = 'checkmark';
        }

        return <Icon name={iconName} color={'red'} active={true} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  },
);

export default createAppContainer(TabNavigator);
