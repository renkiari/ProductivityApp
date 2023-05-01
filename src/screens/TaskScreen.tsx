import { useState } from 'react';
import { Button, View, Text} from 'react-native';
import { TaskProps } from '../navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

type taskItem = {
  id: string;
  name: string;
}

type taskType = {
  id: string;
  name: string;
  rows: taskItem[];
}

const mockData: taskType[] = [
  {
    id: "1",
    name: "To Do",
    rows: [
      {
        id: "11",
        name: "Task 1"
      },
      {
        id: "12",
        name: "Task 2"
      }
    ]
  },
  {
    id: "2",
    name: "Ongoing",
    rows: [
      {
        id: "21",
        name: "Task 3"
      },
      {
        id: "22",
        name: "Task 4"
      }
    ]
  },
  {
    id: "3",
    name: "Completed",
    rows: [
      {
        id: "31",
        name: "Task 5"
      },
      {
        id: "32",
        name: "Task 6"
      }
    ]
  },
  {
    id: "4",
    name: "On Hold",
    rows: [
      {
        id: "41",
        name: "Task 7"
      },
      {
        id: "42",
        name: "Task 8"
      }
    ]
  }
]

function handleDeleteTask(type: string, item: string) {
  console.log(type, item);
}

export function TaskScreen({ navigation }: TaskProps) {
  return (
    <View style={tw`pt-10 h-full flex items-center m-2`}>
      {mockData.map((taskType) => (
        <View key={taskType.id} style={tw`w-full`}>
          <View style={tw`flex flex-row justify-between w-full p-1 self-start bg-slate-700 rounded-lg`}>
            <Text style={tw`text-white text-base pl-2`}>{taskType.name}</Text>
            <Icon.Button 
              name="plus" 
              size={20} 
              color={'#D3D3D3'} 
              style={tw`p-1`}
              backgroundColor='transparent'
            />
          </View>
         
          {taskType.rows.map((taskItem) => (
            <View style={tw`w-full flex flex-row mt-1 self-start justify-between items-center`}>
              <Text key={taskItem.id} style={tw`text-lg pl-3`}>{taskItem.name}</Text>
              <View style={tw`flex flex-row`}>
                <Icon.Button 
                  name="pencil" 
                  size={20} 
                  color={'black'} 
                  backgroundColor='transparent'
                  onPress={() => handleDeleteTask(taskType.id, taskItem.id)}
                />
                <Icon.Button 
                  name="trash" 
                  size={20} 
                  color={'black'} 
                  backgroundColor='transparent'
                  onPress={() => handleDeleteTask(taskType.id, taskItem.id)}
                />
              </View>
            </View>
          ))} 
        </View>
      ))}    
    </View>
  );
};