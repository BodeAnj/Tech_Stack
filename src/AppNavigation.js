import { createStackNavigator, createAppContainer } from 'react-navigation';
import LibraryList2 from './Component/LibraryList2'



    const AppNavigator = createStackNavigator({

        LibraryList2:{screen:LibraryList2,
                navigationOptions: () => ({
                    title: 'Tech Stack',
                    headerStyle: {
                    backgroundColor: 'green',
                },
            
                headerTitleStyle:{
                    color:'white',
                },

                })
        },
        // SignUp:{screen:SignUp,
        //     navigationOptions: () => ({
        //         title: 'SignUp',
        //         headerStyle: {
        //         backgroundColor: 'lightgrey',
        //     },
        
        //     headerTitleStyle:{
        //         color:'black',
        //     },
               
        //     })
        
        // },
    },{
        // initialRouteName:'Auth'
    })
    
    
    
    
    
    export default createAppContainer(AppNavigator)