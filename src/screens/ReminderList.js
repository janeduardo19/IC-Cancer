
import React,{Component} from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, useContext, ScrollView, Button} from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import axios from 'axios';

export default class ReminderList extends Component {
  state = {
    ReminderList: []
  }
  componentDidMount() {
    axios.get("https://5ed94a7e4378690016c6aede.mockapi.io/api/v1/Reminder")
      .then((response) => {
        const ReminderList = response.data;
        this.setState({ ReminderList });
      })
  }

  render() {
   const {ReminderList} = this.state;
   return (
    <ScrollView>
      <View>
        { 
        ReminderList.map(({id,hour,date,title,subtitle}) => (
          <TouchableOpacity key={id}>
            <View>
              <View style={styles.container}>
                <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:1}}>
                  <Text>{hour}</Text>
                  <Text>{date}</Text>
                </View>
                <View>
                  <Text style={styles.title}>{title}</Text>
                </View>
                <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:5}}>
                  <Text style={styles.text}>{subtitle}</Text>
                  <TabBarIcon name="md-mail-unread"/>
                </View>
              </View>
              <Text style={{height:8, backgroundColor: 'rgba(0,0,0, 0.0)'}}></Text>
            </View>
          </TouchableOpacity>
        ))
        }
      </View>
    </ScrollView>
    )
  }
}

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#cfd8dc',
    borderRadius: 10,
    borderColor: '#cfd8dc',
    height: 100,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
  },
  title: {
    fontSize: 24,
  },
  imageReminder:{
    height: 200,
    resizeMode: "contain",
    borderRadius: 8,
  },
  textApp:{
    padding: 5,
  },
});