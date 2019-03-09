import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { Creators as ModalActions } from '../../store/ducks/modal';

class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      modalIsOpen: PropTypes.bool.isRequired,
      username: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
  };

  state = {
    username: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { latitude, longitude, username } = this.state;

    this.props.addDeveloperRequest({ latitude, longitude, username });
    this.setState({ username: '' });
  };

  handleClose = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <Container show={this.props.modal.modalIsOpen}>
        <section className="modal-main">
          {this.props.children}
          <b>Adicionar novo usuário</b>
          <form onSubmit={this.handleSubmit} method="post">
            <input
              type="text"
              onChange={e => this.setState({ username: e.target.value })}
              placeholder="Usuário no Github"
              value={this.state.username}
            />
            <div>
              <button className="default" type="button" onClick={this.handleClose}>
                Cancelar
              </button>
              <button className="success" type="submit">
                Salvar
              </button>
            </div>
          </form>
        </section>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
