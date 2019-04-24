import React, {Component} from 'react' 
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';


 class LibraryList2 extends Component{
    renderLib(library){
        console.log(library.item)
        return(
             <ListItem library = {library}/>
        )
    }

    render(){
        // console.log(this.props)
        return(
            <FlatList 
            data={this.props.libraries}
            renderItem={this.renderLib}
            keyExtractor={library => library.item}
            />
        )
    }
}
const mapStateToProps = state => {
    
    return {libraries : state.libraries}

    
}
export default connect(mapStateToProps) (LibraryList2);
