import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackNavigatorParamList = {
    Home: undefined;
    Login: undefined;
    Main: undefined;
    Register: undefined;
    Task: undefined;
}

export type TabNavigatorParamList = {
    Home: undefined;
    Tasks: undefined;
    Logout: undefined;
}

export const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export const Tab = createBottomTabNavigator<StackNavigatorParamList>();

export type MainProps = NativeStackScreenProps<StackNavigatorParamList, "Main">;

export type HomeProps = NativeStackScreenProps<StackNavigatorParamList, "Home">;

export type LoginProps = NativeStackScreenProps<StackNavigatorParamList, "Login">;

export type RegisterProps = NativeStackScreenProps<StackNavigatorParamList, "Register">;

export type TaskProps = NativeStackScreenProps<StackNavigatorParamList, "Task">;

export type NavbarProps = NativeStackScreenProps<StackNavigatorParamList, "Home">;
