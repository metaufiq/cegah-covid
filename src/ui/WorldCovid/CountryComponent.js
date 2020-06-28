

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

class CountryComponent extends React.PureComponent {
    render() {
        return (
            <View
                style={{
                    flex: 4,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 2,
                    paddingRight: 5
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', color: '#807B7B', paddingHorizontal: 5 }}>
                        {this.props.item.Country_Region}
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#FEBE00',
                        height: '100%',
                        minHeight: 70,
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}
                >
                    <Text style={{ textAlign: 'center', color: 'white' }}>{this.props.item.Confirmed}</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#5CB75C',
                        height: '100%',
                        minHeight: 70,
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginHorizontal: 1
                    }}
                >
                    <Text style={{ textAlign: 'center', color: 'white' }}>{this.props.item.Recovered}</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#D9534F',
                        height: '100%',
                        minHeight: 70,
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}
                >
                    <Text style={{ textAlign: 'center', color: 'white' }}>{this.props.item.Deaths}</Text>
                </View>
            </View>
        )
    }
}

export default CountryComponent