import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Developer from '../Developer/index';
import { Container } from './styles';

const DeveloperList = ({ developers }) => (
  <Container>
    {developers.data.map(developer => (
      <Developer key={developer.id} developer={developer} />
    ))}
  </Container>
);

DeveloperList.propTypes = {
  developers: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        username: PropTypes.string,
        avatar: PropTypes.string,
        url: PropTypes.string,
        cordinates: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  developers: state.developers,
});

export default connect(
  mapStateToProps,
  null,
)(DeveloperList);
