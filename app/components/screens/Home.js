import React, {Component} from 'react';
import {Text, View, ActivityIndicator, Alert} from 'react-native';
import {
    Container, Header, Title, Content, List, ListItem, Button, Tab, Tabs, Body, Icon,
    ScrollableTab, Left
} from 'native-base';
import ListDataItem from '../list_item';
import {getNews} from '../../services/news';
import ShowModal from '../Modal';
import Health from "./Health";
import Science from "./Science";
import Sports from "./Sports";
import Entertainment from "./Entertainment";

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            isError: false,
            setModalVisible: false,
            modalArticleData: {},
            news: null
        };

        this._handleItemDataOnPress = this._handleItemDataOnPress.bind(this);
        this._handleModalClose = this._handleModalClose.bind(this);
    }

    _handleItemDataOnPress(articleData) {
        this.setState({
            setModalVisible: true,
            modalArticleData: articleData
        });
    }

    _handleModalClose() {
        this.setState({
            setModalVisible: false,
            modalArticleData: {}
        })
    }

    componentDidMount() {
        getNews().then(data => {
            this.setState({
                isLoading: false,
                news: data
            })
        }, error => {
            Alert.alert("Error", "Something happened, please try again")
        })
    }

    render() {
        let view = this.state.isLoading ? (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator animating={this.state.isLoading} color="#00f0ff"/>
                <Text style={{marginTop: 8}} children="Please wait..."/>
            </View>
        ) : (
            <List
                dataArray={this.state.news}
                renderRow={(item) => {
                    return (
                        <ListItem>
                            <ListDataItem onPress={this._handleItemDataOnPress} data={item}/>
                        </ListItem>
                    )
                }}/>

        );
        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name='menu' style={{color: 'white'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>News App</Title>
                    </Body>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="General">
                        <Content
                            style={{flex: 1, backgroundColor: '#fff'}}
                            padder={false}>
                            {view}
                        </Content>
                        <ShowModal
                            showModal={this.state.setModalVisible}
                            articleData={this.state.modalArticleData}
                            onClose={this._handleModalClose}/>
                    </Tab>
                    <Tab heading="Health">
                        <Health />
                    </Tab>
                    <Tab heading="Science">
                        <Science />
                    </Tab>
                    <Tab heading="Sports">
                        <Sports />
                    </Tab>
                    <Tab heading="Entertainment">
                        <Entertainment />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}