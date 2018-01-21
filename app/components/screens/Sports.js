import React, {Component} from 'react';
import {Text, View, ActivityIndicator, Alert} from 'react-native';
import {
    Container, Header, Title, Content, List, ListItem, Button, Tab, Tabs, Icon,
    ScrollableTab
} from 'native-base';
import ListDataItem from '../list_item';
import {getSports} from "../../services/news";

export default class Sports extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            isError: false,
            setModalVisible: false,
            modalArticleData: {},
            news: null
        };
    }

    componentDidMount() {
        getSports().then(data => {
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
                            <ListDataItem data={item}/>
                        </ListItem>
                    )
                }}/>

        );
        return (
            <Content
                style={{flex: 1, backgroundColor: '#fff'}}
                padder={false}>
                {view}
            </Content>
        )
    }
}