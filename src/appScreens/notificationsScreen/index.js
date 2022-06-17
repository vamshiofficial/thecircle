import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';

import styles from './styles';
import NotificationCard from '../components/notificationCard';
import {List} from 'native-base';
const NotificationsScreen = () => {
  return (
    <ScrollView style={styles.con}>
      <View style={styles.HeaderSection} />
      <View style={styles.body}>
        <List>
          <NotificationCard 
          ImageUrl="https://i.pinimg.com/236x/08/c0/90/08c09014b4405020915298a6cf874b6a--female-faces-girl-photography.jpg"
          NotificationText="Good news Vamshi,we opened one more outlet .Click here for location details."
          NotificationTime="On 05-02-2021 10:30 PM"
          NotificationType="MESSAGE"
          />
          <NotificationCard 
          ImageUrl="https://i.pinimg.com/236x/08/c0/90/08c09014b4405020915298a6cf874b6a--female-faces-girl-photography.jpg"
          NotificationText="Good news Vamshi,we opened one more outlet .Click here for location details."
          NotificationTime="On 05-02-2021 10:30 PM"
          NotificationType="DANGER"
          />
          <NotificationCard 
          ImageUrl="https://i.pinimg.com/236x/08/c0/90/08c09014b4405020915298a6cf874b6a--female-faces-girl-photography.jpg"
          NotificationText="Good news Vamshi,we opened one more outlet .Click here for location details."
          NotificationTime="On 05-02-2021 10:30 PM"
          NotificationType="SUCCESS"
          />
          <NotificationCard 
          ImageUrl="https://i.pinimg.com/236x/08/c0/90/08c09014b4405020915298a6cf874b6a--female-faces-girl-photography.jpg"
          NotificationText="Good news Vamshi,we opened one more outlet .Click here for location details."
          NotificationTime="On 05-02-2021 10:30 PM"
          NotificationType="APP"
          />
          <NotificationCard 
          ImageUrl="https://i.pinimg.com/236x/08/c0/90/08c09014b4405020915298a6cf874b6a--female-faces-girl-photography.jpg"
          NotificationText="Good news Vamshi,we opened one more outlet .Click here for location details."
          NotificationTime="On 05-02-2021 10:30 PM"
          NotificationType="MESSAGE"
          />
        </List>
      </View>
    </ScrollView>
  );
};

export default NotificationsScreen;
