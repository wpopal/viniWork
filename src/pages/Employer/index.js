import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Creators as MainCreators} from '~/store/ducks/employer';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    this.props.getEmpRequest();
  }

  state = {};

  render() {

    const {getEmpSaga} = this.props;
    console.log('getEmpSaga', getEmpSaga);
    const {loading, error, data} = getEmpSaga;
    console.log('data', data);

    return (
      <View>
        {loading && (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
        {error && <Text>ERROR !!!</Text>}
        {!loading && !error && (
          <ScrollView>
            {data.employers.map((l, i) => (
              <TouchableOpacity
                style={{margin: 20}}
                key={i}
                onPress={() => this.props.navigation.navigate('DETAIL')}>
                <Avatar
                  small
                  rounded
                  source={{uri: l.avatar}}
                  onPress={() => console.log('Works!')}
                  activeOpacity={0.7}
                />
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>
                    {l.display_name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{color: '#767676', fontSize: 16}}>
                    {l.description}
                  </Text>

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
  console.log('state', state);
  return {
    getEmpSaga: state.employer,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(MainCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Intro));
