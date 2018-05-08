/**
 * Created by Burn's hand on 5/7/2018.
 */
import React, {Component} from 'react';
import {View, Image, StyleSheet, ImageBackground, TouchableHighlight, Text, ScrollView} from 'react-native';
export default class placeview_screen extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    static navigationOptions = {
        title: 'Wonders Place',
        header: null
    };


    render() {
        console.log("asd");
        var {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={
                params.place_id == 6 ?
                    require('../src/assets/wonderImages/taj-mahal/background.jpg') :
                    params.place_id == 5 ?
                        require('../src/assets/wonderImages/machu_picchu/background.jpg') :
                        params.place_id == 4 ?
                            require('../src/assets/wonderImages/colosseum/background.jpg') :
                            params.place_id == 3 ?
                                require('../src/assets/wonderImages/petra/background.jpg') :
                                params.place_id == 2 ?
                                    require('../src/assets/wonderImages/chichen-itza/background.jpg') :
                                    params.place_id == 1 ?
                                        require('../src/assets/wonderImages/christ-the-redeemer/background.jpg') :
                                        params.place_id == 0 ?
                                            require('../src/assets/wonderImages/grate-wall/background.jpg') :
                                            null
            } style={wonderViewStyles.container}>
                <View>
                    <TouchableHighlight onPress={() => navigate("Menu", {})} underlayColor="white">
                        <Image source={require('../src/assets/icons/ic_arrow_back_white_24dp_2x.png')}/>
                    </TouchableHighlight>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}
                            contentContainerStyle={wonderViewStyles.contentContainer}>

                    <View>
                        <View style={wonderViewStyles.thumb_view}>
                            <Image resizeMode={'center'} style={wonderViewStyles.thumb}
                                   source={
                                       params.place_id == 6 ?
                                           require('../src/assets/wonderImages/taj-mahal/thumb.jpg') :
                                           params.place_id == 5 ?
                                               require('../src/assets/wonderImages/machu_picchu/thumb.jpg') :
                                               params.place_id == 4 ?
                                                   require('../src/assets/wonderImages/colosseum/thumb.jpg') :
                                                   params.place_id == 3 ?
                                                       require('../src/assets/wonderImages/petra/thumb.jpg') :
                                                       params.place_id == 2 ?
                                                           require('../src/assets/wonderImages/chichen-itza/thumb.jpg') :
                                                           params.place_id == 1 ?
                                                               require('../src/assets/wonderImages/christ-the-redeemer/thumb.jpg') :
                                                               params.place_id == 0 ?
                                                                   require('../src/assets/wonderImages/grate-wall/thumb.jpg') :
                                                                   null
                                   }/>
                        </View>
                    </View>
                    <View style={wonderViewStyles.titleContainer}>
                        <Text style={wonderViewStyles.titleText}>{params.place_name.toUpperCase()}</Text>
                        <Text style={wonderViewStyles.subTitle}>{params.place_country}</Text>
                        <View style={wonderViewStyles.summaryInfo}>
                            <View style={wonderViewStyles.summeryView}>
                                <Image style={wonderViewStyles.summeryImageSize}
                                       source={require('../src/assets/icons/ic_query_builder_white_24dp_2x.png')}/>
                                <Text style={wonderViewStyles.sumTitle}>{params.place_build_age}</Text>
                            </View>
                            <View style={wonderViewStyles.summeryView}>
                                <Image style={wonderViewStyles.summeryImageSize}
                                       source={require('../src/assets/icons/ic_person_pin_white_24dp_2x.png')}/>
                                <Text style={wonderViewStyles.sumTitle}>{params.place_build_by}</Text>
                            </View>
                            <View style={wonderViewStyles.summeryView}>
                                <Image style={wonderViewStyles.summeryImageSize}
                                       source={require('../src/assets/icons/ic_my_location_white_24dp_2x.png')}/>
                                <Text style={wonderViewStyles.sumTitle}>{params.place_coordinates}</Text>
                            </View>
                            <View style={wonderViewStyles.summeryView}>
                                <Image style={wonderViewStyles.summeryImageSize}
                                       source={require('../src/assets/icons/ic_signal_cellular_null_white_24dp_2x.png')}/>
                                <Text style={wonderViewStyles.sumTitle}>{params.place_size}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={wonderViewStyles.overViewPara}>
                                {params.place_desc}
                            </Text>
                        </View>
                    </View>

                </ScrollView>
            </ImageBackground>
        );
    }
}

const wonderViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20.0,
    },
    thumb_view: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    thumb: {
        width: 200.0,
        height: 200.0,
        borderRadius: 400
    },
    contentContainer: {
        paddingVertical: 5,
    },
    overViewPara: {
        textAlign: 'center',
        fontSize: 15.0,
        color: '#FFFFFF',
        marginTop: 10.0,
    },
    titleContainer: {
        marginTop: 10.0,
        borderRadius: 15.0,
        backgroundColor: '#f4ad42',
        padding: 20,
        paddingRight:30
    }, titleText: {
        fontSize: 20.0,
        color: "#FFFFFF",
        textAlign: 'center',
    }, subTitle: {
        fontSize: 15.0,
        textAlign: 'center'
    }, summaryInfo: {
        flexDirection: 'column',
    }, sumTitle: {
        textAlign: 'left',
        fontSize: 16.0,
        fontWeight: 'bold',
    }, summeryView: {
        flexDirection: 'row',
        marginBottom: 8.0,
    }, summeryImageSize: {
        width: 25.0,
        height: 25.0,
        marginRight: 5
    }
});
