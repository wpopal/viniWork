import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Text, Avatar} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Creators as MainCreators} from '~/store/ducks/main';

class Employer extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }

  state = {
    data: [
      {
        avata:
          'https://images.vietnamworks.com/pictureofcompany/86/10762349.png',
        title:
          'Nhân Viên Kỹ Thuật Linh Kiện 部品技術スタッフ Parts Engineering Staff',
        dec:
          'Công Ty TNHH Công Nghệ Máy Văn Phòng Kyocera Việt Nam - Hải Phòng',
      },
      {
        avata:
          'https://images.vietnamworks.com/pictureofcompany/68/10762892.png',
        title: '[VinSmart] Chuyên Viên PLM/ MES (Triển Khai/ Vận Hành)',
        dec:
          'Công Ty Cổ Phần Nghiên Cứu Và Sản Xuất Vinsmart - Thành Viên Của Tập Đoàn Vingroup - Hà Nội',
      },
      {
        avata:
          'https://images.vietnamworks.com/pictureofcompany/74/10836025.png',
        title: '[VinAI] Linux Administrator',
        dec: 'Vintech_Thuộc Tập Đoàn Vingroup - Hà Nội',
      },
      {
        avata:
          'https://images.vietnamworks.com/pictureofcompany/12/9400715.jpg',
        title:
          '(Senior) Supplier Quality Engineer (for Interior, Exterior, Biw, Electrical) - Working in Haiphong (3 positions)',
        dec:
          'Công Ty TNHH Sản Xuất Và Kinh Doanh Vinfast - Thành Viên Của Vingroup - Hà Nội, Hải Dương, Hải Phòng',
      },
      {
        avata:
          'https://images.vietnamworks.com/pictureofcompany/d2/10860207.png',
        title: 'Stock Management Assistant Manager',
        dec: 'Daikin Air Conditioning (Vietnam) Joint Stock Company',
      },
      {
        avata:
          'https://images.vietnamworks.com/pictureofcompany/64/10636499.png',
        title: 'Phó Phòng Phát Triển Kinh Doanh (Kênh Khách Hàng Chuỗi)',
        dec: 'Navigos Group',
      },
      {
        avata:
          'https://images.vietnamworks.com/pictureofcompany/db/10849297.png',
        title: 'Cần Gấp ! 3 Tester Software ( 1 - 3 Năm Kinh Nghiệm )',
        dec: 'Navigos Group - Hồ Chí Minh',
      },
      {
        avata:
          'https://images.vietnamworks.com/pictureofcompany/9e/10228105.jpg',
        title: 'Senior Officer, EHS',
        dec: 'Molex Vietnam Co., Ltd.',
      },
    ],
  };

  render() {
    const datax = this.props.data;
    const {loading, data} = datax;
    return (
      <View>
        {loading && (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
        {!loading && (
          <ScrollView style={{marginBottom: 100}}>
            <Text h3>Việc Làm Tốt Nhất</Text>
            {data.jobs.map((l, i) => (
              <TouchableOpacity
                style={{margin: 20}}
                key={i}
                onPress={() => this.props.navigation.navigate('DETAIL')}>
                <Avatar
                  small
                  rounded
                  source={{uri: l.employer.avatar}}
                  onPress={() => console.log('Works!')}
                  activeOpacity={0.7}
                />
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>
                    {l.post_title}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{color: '#767676', fontSize: 16}}>
                    {l.post_excerpt}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    {l.location.map((x, y) => (
                      <Text
                        key={y}
                        style={{color: '#9a9a9a', fontSize: 16, margin: 5}}>
                        {x.name}
                      </Text>
                    ))}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    empRequest: state.emp,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(MainCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Employer));
