import { View } from 'react-native'
import React from 'react'
import { Header } from 'react-native-elements'

const HeaderS = () => {
    return (
        <View>
            <Header backgroundColor='pink'
                // leftComponent={{ icon: 'menu', color: '#fff', size:35}}
                centerComponent={{ text: 'My notes', style: { color: '#fff', fontSize:25, fontWeight: "bold" }  }}
                // rightComponent={{ icon: 'home', color: '#fff' ,size:35}}
            />
        </View>
    )
}

export default HeaderS
