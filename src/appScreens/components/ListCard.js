import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  ListItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import fonts from '../../../assets/custom/fonts';
import colors from '../../../assets/custom/colors';
const ListCard = props => {
  return (
    <View style={styles.cardStyle}>
      <ListItem noBorder>
        <Left>
          <Thumbnail
            source={{
              uri: props.ImageUrl,
            }}
          />
          <Body>
            <Text style={styles.HeadingText}>{props.HeaddingText}</Text>
            <Text note style={styles.BodyText}>
              {props.BodyText}
            </Text>
            {props.LearnmoreBtn ? (
              <TouchableOpacity style={styles.LearnmoreBtn} onPress={props.onClickLearnmore}>
                <Text style={styles.LearnmoreText}>Learnmore</Text>
              </TouchableOpacity>
            ) : null}
          </Body>
        </Left>
      </ListItem>
    </View>
  );
};
const styles = StyleSheet.create({
  cardStyle: {
    // backgroundColor: '#dddd',
    marginLeft: 0,
    width: '90%',
    // height:'100%',
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.white1,
  },
  HeadingText: {
    fontFamily: fonts.PrimaryBoldFont,
    fontSize: fonts.FontHeadding,
  },
  BodyText: {
    fontFamily: fonts.PrimaryFont,
    fontSize: fonts.FontBody,
  },
  LearnmoreBtn: {
    marginTop: 10,
  },
  LearnmoreText: {
    fontFamily: fonts.PrimaryFont,
    fontSize: fonts.FontBody,
    color: colors.directs,
  },
});
export default ListCard;
