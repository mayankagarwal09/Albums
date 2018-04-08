import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={[styles.center, styles.viewStyle]}>
                <Text style={styles.headerStyle}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}
export default Header;

const styles=StyleSheet.create({
    headerStyle:{
        fontSize:50,
    },
    viewStyle:{
        backgroundColor: '#fff',
        height:60,
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    }
});


