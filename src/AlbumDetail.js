import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = (props) => {
    return(
        <Card>
            <CardItem>
                <View style={styles.thumbnailConatinerStyle}>
                    <Image
                        source={{uri:props.album.thumbnail_image}}
                        style={styles.thumbnailStyle}
                    />
                </View>
                <View style={styles.textContainerStyle}>
                    <Text style={[styles.titleStyle,styles.textStyle]}>{props.album.title}</Text>
                    <Text style={styles.textStyle}>{props.album.artist}</Text>
                </View>

            </CardItem>
            <CardItem>
                <Image
                    source={{uri:props.album.image}}
                    style={styles.coverImageStyle}
                />
            </CardItem>

            <CardItem>
                <Button onPress={()=>Linking.openURL(props.album.url)}>
                    Buy Now!
                </Button>
            </CardItem>
        </Card>
    )
}

export default AlbumDetail;

const styles={
    textContainerStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailStyle:{
        height:50,
        width:50,
    },
    thumbnailConatinerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    titleStyle:{
        fontSize:20
    },
    coverImageStyle:{
        width:null,
        height:300,
        flex:1
    },
    textStyle:{
        color:'#000'
    }
}