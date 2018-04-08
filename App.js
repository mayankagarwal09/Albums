import React, {Component} from 'react';
import { View } from 'react-native';
import Header from './src/Header'
import AlbumList from "./src/AlbumList";

class App extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <Header title={'Albums'}/>
                <AlbumList/>
            </View>
        );
    }
}




export default App;
