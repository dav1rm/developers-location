import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DevelopersActions } from '../../store/ducks/developers';

import { Container } from './styles';

const Developer = (props) => {
  const { developer } = props;
  return (
    <Container>
      <div className="info-developer">
        <img src={developer.avatar} alt={developer.login} />
        <div>
          <strong>{developer.name}</strong>
          <span>{developer.username}</span>
        </div>
      </div>
      <div className="actions-developer">
        <button type="submit" onClick={() => props.removeDeveloper(developer.id)}>
          <i className="fa fa-times-circle" />
        </button>
        <a href={developer.url} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-angle-right" />
        </a>
      </div>
    </Container>
  );
};

Developer.propTypes = {
  removeDeveloper: PropTypes.func.isRequired,
  developer: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(DevelopersActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Developer);
