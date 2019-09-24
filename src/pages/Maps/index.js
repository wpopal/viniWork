import React, {Component} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Marker} from 'react-native-maps';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Creators as MapMainCreators} from '~/store/ducks/mapMain';
import {HomeLocator} from './containers/MapView/index';
import Index from '../Main/index';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Text,
  Button,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  panel: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  panelHeader: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 28,
    color: '#FFF',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  iconBg: {
    backgroundColor: '#2b8a3e',
    position: 'absolute',
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    borderRadius: 24,
    zIndex: 1,
  },
});

class MapMain extends Component {
  static defaultProps = {
    draggableRange: {top: height - 70, bottom: 30},
  };

  _draggedValue = new Animated.Value(30);

  // const { mainRequest } = this.props;
  // const { loading, error, data } = mainRequest;
  render() {
    const {top, bottom} = this.props.draggableRange;

    const backgoundOpacity = this._draggedValue.interpolate({
      inputRange: [height, height],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.container}>
        <HomeLocator />
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          snappingPoints={[360]}
          height={viewportHeight - 30}
          friction={0.5}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Animated.View style={[styles.textHeader]}>
                <View
                  style={{
                    height: 3,
                    width: 60,
                    borderRadius: 50,
                    backgroundColor: '#dddddd',
                  }}
                />
              </Animated.View>
            </View>
            <View style={styles.container} />
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  mapMainRequest: state.main,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MapMainCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapMain);
