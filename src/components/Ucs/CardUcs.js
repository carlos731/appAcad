import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';

export default function CardUcs(props){
    return(
        <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
      />
    );
}

