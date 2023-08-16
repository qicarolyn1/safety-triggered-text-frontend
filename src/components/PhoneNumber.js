import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';


const PhoneNumber = (props) => {

    return (
        <View className="phone_number">
            <Text style={StyleSheet.baseText}>
                {props.name}
                {'\n'}
                {props.phone_number}
                </Text>
            <View className="phone_number_controls">
                <Button>
                    onPress={}
                    title="Edit"
                    accessibilityLabel="Edit phone number information"
                </Button>
                <Button>
                    onPress={props.deleteCard(props.id)}
                    title="Delete"
                    accessbilityLabel="Delete phone number"
                </Button>
            </View>
        </View>
    );
};



export default PhoneNumber