import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Creators as MainCreators} from '~/store/ducks/main';
import Employer from './employer';
import {Drawer} from 'native-base';
import SideBar from './menudemo';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {};

  closeDrawer = () => {
    this._drawer._root.close();
  };

  openDrawer = () => {
    this._drawer._root.open();
  };

  componentDidMount(): void {
    this.props.getmainRequest();
  }

  render() {
    const {getMainSaga} = this.props;
    const {loading, error, data} = getMainSaga;
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: 60,
              backgroundColor: '#2aa7ff',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <TouchableOpacity onPress={this.openDrawer}>
              <FontAwesomeIcon icon={faBars} />
            </TouchableOpacity>
            <Text>Vini Work</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SEARCH')}>
              <FontAwesomeIcon icon={faSearch} />
            </TouchableOpacity>
          </View>
          {loading && (
            <View>
              <Text>Loading...</Text>
            </View>
          )}
          {error && (
            <View>
              <Text>ERROR !!!</Text>
            </View>
          )}
          {!loading && !error && <Employer data={this.props.getMainSaga} />}
        </View>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    getMainSaga: state.main,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(MainCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Home));
