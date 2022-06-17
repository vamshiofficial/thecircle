import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Left,
  Body,
  Right,
  Switch,
  List,
} from 'native-base';
import OutletCommentCard from './CommentUi';
import MenuListSheet from './MenuListSheet';
import OutletImagesSheet from './outletImages';
const OutletScreen = () => {
  const [visible, setVisible] = useState(false);
  const [GalleryVisible, setGalleryVisible] = useState(false);
  return (
    <View style={styles.con}>
      <Image
        style={styles.mainBgImg}
        source={{
          uri: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/06/25210032/RahimanTeaStall3.jpg',
        }}
      />
      <View style={styles.topBtnGrp}>
        <TouchableOpacity style={styles.topBtn} onPress={()=>setGalleryVisible(!GalleryVisible)}>
          <Ionicons name="images-outline" style={styles.TopBtnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topBtn}>
          <Feather name="users" style={styles.TopBtnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topBtn}>
          <MaterialCommunityIcons
            name="map-marker-radius-outline"
            style={styles.TopBtnIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topBtnRating}>
          <Feather name="heart" style={styles.TopRatingBtnIcon} />
          <Text style={styles.RatingCount}>7823</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.aboutOutletCon}>
        <Text style={styles.OutletName}>Circle-SIDDIPET-1908</Text>
        <View style={styles.aboutOutlet}>
          <MaterialCommunityIcons
            name="clock-time-twelve-outline"
            style={styles.aboutOutletIcon}
          />
          <Text style={styles.aboutOutletText}>5 AM to 10 PM every day</Text>
        </View>
        <View style={styles.aboutOutlet}>
          <MaterialIcons name="double-arrow" style={styles.aboutOutletIcon} />
          <Text style={styles.aboutOutletText}>
            Online order available on Zomato,Swiggy
          </Text>
        </View>
        <View style={styles.aboutOutlet}>
          <MaterialIcons name="double-arrow" style={styles.aboutOutletIcon} />
          <Text style={styles.aboutOutletText}>
            Online payment options available,Esy pay, Google pay,PhonePe
          </Text>
        </View>
      </View>
      <Text style={styles.feedbackHeding}>FEEDBACKS</Text>
      <List>
        <OutletCommentCard
          ImageUrl="https://i.pinimg.com/236x/08/c0/90/08c09014b4405020915298a6cf874b6a--female-faces-girl-photography.jpg"
          CommentText="Good news Vamshi,we opened one more outlet .Click here for location details."
          CommentTime="On 05-02-2021 10:30 PM"
        />
        <OutletCommentCard
          ImageUrl="https://i.pinimg.com/236x/08/c0/90/08c09014b4405020915298a6cf874b6a--female-faces-girl-photography.jpg"
          CommentText="Good news Vamshi,we opened one more outlet .Click here for location details."
          CommentTime="On 05-02-2021 10:30 PM"
        />
        <OutletCommentCard
          ImageUrl="https://i.pinimg.com/236x/08/c0/90/08c09014b4405020915298a6cf874b6a--female-faces-girl-photography.jpg"
          CommentText="Good news Vamshi,we opened one more outlet .Click here for location details."
          CommentTime="On 05-02-2021 10:30 PM"
        />
        <OutletCommentCard
          ImageUrl="https://i.pinimg.com/236x/08/c0/90/08c09014b4405020915298a6cf874b6a--female-faces-girl-photography.jpg"
          CommentText="Good news Vamshi,we opened one more outlet .Click here for location details."
          CommentTime="On 05-02-2021 10:30 PM"
        />
      </List>
      <TouchableOpacity style={styles.menuBtn} onPress={()=>setVisible(!visible)}>
        <MaterialIcons name="segment" style={styles.menuIcon} />
        <Text style={styles.menuText}>Menu</Text>
      </TouchableOpacity>
      <MenuListSheet visible={visible} setVisible={setVisible} />
      <OutletImagesSheet GalleryVisible={GalleryVisible} setGalleryVisible={setGalleryVisible} />
    </View>
  );
};

export default OutletScreen;
