import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Button, Card, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ROUTES} from '../../../App';

type OptionItem = {
  title: string;
  icon: string;
  navigationRoute: string;
};

const OPTIONS: OptionItem[] = [
  {
    title: 'Read QR Code',
    icon: 'rocket',
    navigationRoute: ROUTES.qRCodeReader,
  },
  {
    title: 'Settings',
    icon: 'cogs',
    navigationRoute: ROUTES.qRCodeReader,
  },
  {
    title: 'Settings 2',
    icon: 'cog',
    navigationRoute: ROUTES.qRCodeReader,
  },
];

export const HomeScreen: React.FC = ({}) => {
  const navigation = useNavigation();

  const handleOnPress = (option: OptionItem) => {
    navigation.navigate(option.navigationRoute);
  };

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'column',
        }}>
        {OPTIONS.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => handleOnPress(option)}>
            <Card
              containerStyle={{
                borderRadius: 20,
                width: 120,
                height: 120,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Card.Title>{option.title}</Card.Title>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name={option.icon} size={30} color="#000" />
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
