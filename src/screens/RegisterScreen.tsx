import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Button, View, TextInput, Text } from 'react-native';
import { RegisterProps } from '../navigation/types';

import tw from 'twrnc';

const supabaseUrl = "https://dgybpkymfdulzycbflce.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRneWJwa3ltZmR1bHp5Y2JmbGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1ODIwMDYsImV4cCI6MTk5ODE1ODAwNn0.f1RqndRJ5BPWZgsjxf91ua133LqsFf19hXXK5mY4FSM";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function RegisterScreen({ navigation }: RegisterProps) {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [RMsg, setRMsg] = useState<string>('');
  const [user, setUser] = useState<string>('');

  const Register = async () => {
    const { data, error } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          data: {
            username,

          }
        }
      }
    )
    // const {data, error} = await supabase.auth.signUp({
    //   email,
    //   password,
    // });
    if(error){
      setRMsg(error.message)
    }else{
      setRMsg('User created successfully');
    }
  }

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl text-black dark:text-white mb-2`}>My Tasks</Text>
      <TextInput 
        autoCapitalize='none'
        placeholder='Username' 
        style={tw`m-2 p-3 w-3/4 border-2 border-slate-300 rounded-md`}
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput 
        autoCapitalize='none'
        placeholder='Email' 
        style={tw`m-2 p-3 w-3/4 border-2 border-slate-300 rounded-md`}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput 
        autoCapitalize='none'
        secureTextEntry={true}
        placeholder='Password' 
        style={tw`m-2 p-3 w-3/4 border-2 border-slate-300 rounded-md`}
        onChangeText={(e) => setPassword(e)}
      />
      <View style={tw`m-2 p-1 bg-blue-600 w-3/4 rounded-md`}>
        <Button 
          title='Register' 
          color={'white'}      
          onPress={Register}
        />
      </View>
      <Text>{RMsg}</Text>
      <View style={tw`flex flex-row justify-center items-center`}>
        <Text style={tw`text-base`}>Already have an account?</Text>
        <Button 
          title="Login" 
          onPress={() => {
          navigation.navigate("Login");
        }}
        />
      </View>
    </View>
  );
};
