import React from 'react';

import { Container } from './styles';

const Developer = ({ developer }) => (
  <Container>
    <div className="info-developer">
      <img src={developer.avatar_url} alt={developer.login} />
      <div>
        <strong>{developer.name}</strong>
        <span>{developer.login}</span>
      </div>
    </div>
    <div className="actions-developer">
      <button type="submit" onClick={() => alert('excluir')}>
        <i className="fa fa-times-circle" />
      </button>
      <button type="submit" onClick={() => alert('ver mais')}>
        <i className="fa fa-angle-right" />
      </button>
    </div>
  </Container>
);

export default Developer;
