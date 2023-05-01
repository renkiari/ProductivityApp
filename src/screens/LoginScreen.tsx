import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createClient } from '@supabase/supabase-js';
import { Button, View, TextInput, Text } from 'react-native';
import { LoginProps } from '../navigation/types';
import tw from 'twrnc';

const supabaseUrl = "https://dgybpkymfdulzycbflce.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRneWJwa3ltZmR1bHp5Y2JmbGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1ODIwMDYsImV4cCI6MTk5ODE1ODAwNn0.f1RqndRJ5BPWZgsjxf91ua133LqsFf19hXXK5mY4FSM";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function LoginScreen({ navigation }: LoginProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [LMsg, setLMsg] = useState<string>('');

  const Login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log(error);
    if(error){
      setLMsg(error.message)
    }else{
      setLMsg('Login successfully');
      navigation.navigate("Main");
    }
  }
 
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl text-black dark:text-white mb-2`}>My Tasks</Text>
      <Text style={tw`text-base text-red-500`}>{LMsg}</Text>
      <TextInput 
        autoCapitalize='none'
        secureTextEntry={false}
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
          title='Login' 
          color={'white'}      
          onPress={Login}
        />
      </View>
      <View style={tw`flex flex-row justify-center items-center`}>
        <Text style={tw`text-base`}>Don't have an account?</Text>
        <Button 
          title="Register" 
          onPress={() => {
          navigation.navigate("Register");
        }}
        />
      </View>
    </View>
  );
};
