import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { getUsers } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/Home.styles';
import { typography } from '@/theme';

export function Home() {
  const { colors } = useTheme();
  const users = useSelector(getUsers) || [];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardWrapper}>
        <Text style={typography.detail}>{`Name: ${_.get(item, 'firstName', '')} ${_.get(
          item,
          'lastName',
          ''
        )}`}</Text>
        <Text style={typography.detail}>{`Email: ${_.get(item, 'email', '')}`}</Text>
        <Text style={typography.detail}>{`Location: ${_.get(item, 'city', '')}, ${_.get(
          item,
          'country',
          ''
        )}`}</Text>
        <Text style={typography.detail}>{`Birthday: ${_.get(item, 'dateOfBirth', '')}`}</Text>
        <Text style={typography.detail}>{`Phone: ${_.get(item, 'mobile', '')}`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[typography.title, { color: colors.text }]}>Users</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={_.toArray(users)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
