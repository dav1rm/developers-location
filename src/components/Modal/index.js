import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as DevelopersActions } from '../../store/ducks/developers';

class Modal extends Component {
  static propTypes = {
    addDeveloperRequest: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      modalIsOpen: PropTypes.bool.isRequired,
      cordinates: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      }),
    }).isRequired,
  };

  state = {
    username: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { cordinates } = this.props.modal;
    const { username } = this.state;

    await this.props.addDeveloperRequest({ cordinates, username });
    this.handleClose();
  };

  handleClose = () => {
    this.props.closeModal();
    this.setState({ username: '' });
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
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...DevelopersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
