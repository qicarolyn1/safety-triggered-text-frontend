import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button, ScrollView} from 'react-native';
import PhoneNumber from './components/PhoneNumber.js';

const NumberList = ({ numbers }) => {
    const getNumberListJSX = (numbers) => {
        return numbers.map((number) =>{
            return (
                <PhoneNumber name={number.name}
                phone_number={number.phone_number}
                />
            );
        } );
    };

    return <ScrollView className="number_list"> {getNumberListJSX(numbers)}</ScrollView>;
}

export default NumberList;