import React, {Component} from "react";
import {Text, StyleSheet, Image} from "react-native";
import {
    Container, Header, Title, Content, Button, Tab, Tabs, Body, Icon, Left
} from 'native-base';
export default class About extends Component {

    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>News App</Title>
                    </Body>
                </Header>
                <Content>
                    <Image
                        source={require('../images/me.jpg')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>
                        Manjurul Hoque
                    </Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 200,
        flex: 1
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});