import * as React from 'react';
import { Button, View, Text} from 'react-native';
import { HomeProps } from '../navigation/types';
import tw from 'twrnc';

export function HomeScreen({ navigation }: HomeProps) {
    return (
      <View style={tw`h-full flex justify-center items-center text-lg`}>
        <Text style={tw`text-xl mb-2`}>Home Screen</Text>
      </View>
    );
};