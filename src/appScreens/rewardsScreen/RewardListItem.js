import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import fonts from '../../../assets/custom/fonts';
import colors from '../../../assets/custom/colors';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from 'native-base';

const RewardCard = props => {
  return (
    <View style={styles.con}>
      <ListItem avatar noBorder>
        <Left>
          <Thumbnail
            style={[
              styles.profileImage,
            ]}
            source={{
              uri: props.ImageUrl,
            }}
          />
        </Left>
        <Body>
          <Text note style={styles.messageText}>
            {props.CardText}
          </Text>
          <Text style={styles.time}>{props.CardTime}</Text>
        </Body>
        <Right />
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    marginLeft: 0,
    width: '95%',
    // height:'100%',
    alignSelf: 'center',
    // marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.white1,
  },
  profileImage: {
    borderRadius: 13,
    width: 60,
    height: 60,
  },
  time: {
    fontFamily: fonts.PrimaryFont,
    fontSize: fonts.FontSmall,
    color: colors.white5,
  },
  messageText: {
    fontFamily: fonts.PrimaryFont,
    fontSize: fonts.FontBody,
    color: colors.black3,
  },
});
export default RewardCard;
