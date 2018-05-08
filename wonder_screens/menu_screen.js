/**
 * Created by Burn's hand on 5/4/2018.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableHighlight,
    Alert,
    ImageBackground
} from 'react-native';


export default class wonders_menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wonder_data: [],
            isLoading: true,
        }

    }

    static navigationOptions = {
        title: 'Wonders Menu',
        header: null
    };

    renderItem = ({item}) => {
        const {navigate} = this.props.navigation;
        return (
            <TouchableHighlight onPress={
                () => navigate("Details", {
                    place_id: item.id,
                    place_name: item.name,
                    place_country: item.country,
                    place_build_age: item.builtage,
                    place_build_by: item.builtby,
                    place_coordinates: item.coordinates,
                    place_size: item.size,
                    place_desc: item.short_desc,
                })
            } underlayColor="white">
                <View style={wonderMenuStyles.list_container}>
                    <View style={wonderMenuStyles.datacon}>
                        <Text style={wonderMenuStyles.main_text}>{item.name.toUpperCase()}</Text>
                    </View>
                    <View style={{flexDirection: 'column' }}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../src/assets/icons/ic_room_white_24dp_2x.png')}
                                   style={wonderMenuStyles.iconsmall}/>
                            <Text style={wonderMenuStyles.sumsum}>{ item.country.toUpperCase() }</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Image  source={require('../src/assets/icons/ic_query_builder_white_24dp_2x.png')}
                                   style={wonderMenuStyles.iconsmall}/>
                            <Text style={wonderMenuStyles.sumsum}>{ item.builtage }</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    componentDidMount() {
        const url = 'http://www.json-generator.com/api/json/get/bPEnyHMAya?indent=2'
        fetch(url)
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({
                    wonder_data: responseJson.Places,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            this.state.isLoading ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <ActivityIndicator size='large' color="#000000" animating/>
            </View> :
                <ImageBackground source={require('../src/assets/background2.jpg')}
                                 style={wonderMenuStyles.containerView}>
                    <FlatList
                        data={this.state.wonder_data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ImageBackground>
        );
    }
}

const wonderMenuStyles = StyleSheet.create(
    {
        containerView: {
            flex: 1,
            padding: 20.0,
        },
        main_text: {
            fontSize: 20.0,
            color: '#FFFFFF',
            fontWeight: 'bold',
        },
        list_container: {
            backgroundColor: '#37affc',
            padding: 20.0,
            margin: 10.0,
            borderWidth: 5.0,
            borderColor: 'transparent',
            borderBottomColor: '#6ec6ff',
        },
        datacon: {
            flexDirection: 'column',
            borderWidth: 3.0,
            borderColor: 'transparent',
            borderBottomColor: '#6ec5ff',
            paddingBottom: 5.0,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconsmall: {
            width: 20.0,
            height: 20.0,
            marginBottom: 8.0,
        },
        sumsum: {
            marginBottom: 8.0,
    }
    }
);
