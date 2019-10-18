import React, { useState } from 'react';
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

// Components
import { NewToDoComponent, AddToDoButtonComponent } from '../index';

const AllToDo = () => {
  const [newToDo, setNewToDo] = useState(false);

  const saveToDoData = todo => {
    setNewToDo(false);
    console.log(
      `ToDo is: ${todo.title} ${
        todo.completed ? 'completed!' : 'not completed!'
      }`,
    );
  };

  return (
    <Container>
      <Header>
        <Body>
          <Title>All</Title>
        </Body>
      </Header>
      <Content>
        {newToDo && (
          <NewToDoComponent
            onClick={saveToDoData}
            onCancel={() => setNewToDo(false)}
          />
        )}
      </Content>
      {!newToDo && <AddToDoButtonComponent onClick={() => setNewToDo(true)} />}
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
