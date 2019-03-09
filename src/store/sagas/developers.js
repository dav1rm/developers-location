import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Creators as DeveloperActions } from '../ducks/developers';
import { Creators as ModalActions } from '../ducks/modal';

export function* addDeveloper(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.data.username}`);

    const isDuplicated = yield select(state => state.developers.data.find(developer => developer.id === data.id));

    if (isDuplicated) {
      yield put(DeveloperActions.addDeveloperFailure('Desenvolvedor já adicionado'));
      toast.warn('Usuário Duplicado!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const developerData = {
        id: data.id,
        name: data.name,
        username: data.login,
        avatar: data.avatar_url,
        url: data.html_url,
        cordinates: action.payload.data.cordinates,
      };

      yield put(DeveloperActions.addDeveloperSuccess(developerData));
      toast.success('Usuário Adicionado com Sucesso', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } catch (err) {
    yield put(DeveloperActions.addDeveloperFailure('Error ao adicionar desenvolvedor'));
    toast.error('Erro ao adicionar Usuário!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } finally {
    yield put(ModalActions.closeModal());
  }
}
