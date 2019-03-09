import React from 'react';
// import PropTypes from 'prop-types';

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
const mapStateToProps = state => ({
  developers: state.developers,
});

export default connect(
  mapStateToProps,
  null,
)(DeveloperList);
