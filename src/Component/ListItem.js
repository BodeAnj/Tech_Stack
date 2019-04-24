import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View,StyleSheet, TouchableWithoutFeedback, LayoutAnimation} from 'react-native';
import * as actions from '../Redux/Actions'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


 class ListItem extends Component{
    componentDidUpdate(){
        LayoutAnimation.spring()
    }

    renderDescription(){
        const {library, selectedLibraryId} = this.props;
        console.log(this.props)
         if (library.item.id === selectedLibraryId){
            return (
                <Text>{library.item.description}</Text>
            )
         } 
    }

    render(){
         console.log(this.props)

        const { id, title} = this.props.library.item;
        return(
            <TouchableWithoutFeedback
            onPress = {() => this.props.selectLibrary(id)}
            >     
                <View style ={Style.cardSection}>
                    <Text style ={Style.titleView}>
                        {title}
                    </Text>
                    <Text>
                    {this.renderDescription()}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
} 

const Style = StyleSheet.create({
    cardSection:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        // flexDirection:'row',
        borderColor: '#ddd',
        position:'relative'
    },
    titleView:{
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId}
}

export default connect(mapStateToProps,actions) (ListItem)