import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { Avatar } from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const NavBar = () => (
    <Appbar.Header style={styles.header}>
        <Appbar.Content title="Logo" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
);

export default NavBar;

const styles = StyleSheet.create({
    header: {
    }
});
// backgroundColor: '#ff9932'