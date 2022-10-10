import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import { BottomNavigation, Text, } from 'react-native-paper';

const HomeRoute = () => <View>Home</View>;

const AlbumsRoute = () => <Text></Text>;

const RecentsRoute = () => <Text></Text>;

const NotificationsRoute = () => <Text></Text>;

const ButtonNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'albums', title: 'Calendário', focusedIcon: 'calendar', unfocusedIcon: 'calendar-outline' },
    { key: 'recents', title: 'Cursos', focusedIcon: 'book', unfocusedIcon: 'book-outline' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      inactiveColor='#00315a'
      activeColor='#ff9932'
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default ButtonNavigation;

const styles = StyleSheet.create({
  fundo: {
      backgroundColor: '#ff9932'
  }
});