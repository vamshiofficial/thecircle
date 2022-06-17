import {View} from 'react-native';
import React from 'react';
import ImageView from 'react-native-image-viewing';
const OutletImagesSheet = props => {
  const images = [
    {
      uri: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/06/25210032/RahimanTeaStall3.jpg',
    },
    {
      uri: 'https://stat1.bollywoodhungama.in/wp-content/uploads/2019/05/Photos-Vivek-Oberoi-snapped-at-a-tea-stall-during-PM-Narendra-Modi-promotions-1.jpg',
    },
    {
      uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
    },
    {
      uri: 'https://i.pinimg.com/736x/76/01/f8/7601f899021ef6e2042b19dee3311cd2.jpg',
    },
  ];
  return (
    <View>
      <ImageView
        images={images}
        imageIndex={0}
        visible={props.GalleryVisible}
        onRequestClose={() => props.setGalleryVisible(false)}
        doubleTapToZoomEnabled={true}
      />
    </View>
  );
};

export default OutletImagesSheet;
