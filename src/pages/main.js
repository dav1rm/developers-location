import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import MapGL, { Marker } from 'react-map-gl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Creators as DeveloperActions } from '../store/ducks/developers';
import { Creators as ModalActions } from '../store/ducks/modal';
import Modal from '../components/Modal';
import DeveloperList from '../components/DeveloperList';

import 'mapbox-gl/dist/mapbox-gl.css';

class Main extends Component {
  static propTypes = {
    developers: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      modalIsOpen: PropTypes.bool.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          username: PropTypes.string,
          avatar: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
      // error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = async (e) => {
    const [longitude, latitude] = e.lngLat;

    await this.props.openModal({ latitude, longitude });
  };

  render() {
    return (
      <Fragment>
        <Modal>{!!this.props.developers.error && <span>{this.props.developers.error}</span>}</Modal>
        <DeveloperList />
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZGF2aXI4IiwiYSI6ImNqdDBmaGcxbDAzMWIzeW1qNHl2cnliangifQ.qtAwkmj4MrUhT75pX7IruA"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.props.developers.data.map(developer => (
            <Marker
              key={developer.id}
              latitude={developer.cordinates.latitude}
              longitude={developer.cordinates.longitude}
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                }}
                alt={developer.username}
                src={developer.avatar}
              />
            </Marker>
          ))}
        </MapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
