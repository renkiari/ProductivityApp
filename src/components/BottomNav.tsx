import * as React from 'react';
import { Button, View, Text} from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorParamList } from '../navigation/types';

export function BottomNav() {
  const navigation = useNavigation<StackNavigatorParamList>();
    return (
      <View style={tw`h-full flex`}>
        <Text>Home Screen</Text>
        {/* <Button 
          title="Go to Tasks" 
          onPress={() => {
            navigation.navigate("Home");
          }} 
        /> */}
        <View style={tw`absolute bottom-0 w-full p-3 py-4 bg-white`}>
        <BottomNav/>
        </View>
    
      </View>
    );
};