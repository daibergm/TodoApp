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

// Components
import AllTodoContainer from '../../containers/AllTodoContainer';

const AllTodo = () => (
  <AllTodoContainer showFabBtn screen="All" title="All ToDos" />
);

const ActiveTodo = () => (
  <AllTodoContainer showFabBtn={false} screen="Active" title="Active ToDos" />
);

const CompletedTodo = () => (
  <AllTodoContainer
    showFabBtn={false}
    screen="Completed"
    title="Completed ToDos"
  />
);

const TabNavigator = createBottomTabNavigator(
  {
    All: AllTodo,
    Active: ActiveTodo,
    Completed: CompletedTodo,
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
