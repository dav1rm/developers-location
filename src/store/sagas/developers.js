import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DeveloperActions } from '../ducks/developers';

export function* addDeveloper(action) {
  try {
    console.tron.log(action.payload);
    const { data } = yield call(api.get, `/users/${action.payload.data.username}`);

    const isDuplicated = yield select(state => state.developers.data.find(developer => developer.id === data.id));

    if (isDuplicated) {
      yield put(DeveloperActions.addDeveloperFailure('Desenvolvedor já adicionado'));
    } else {
      const developerData = {
        id: data.id,
        name: data.name,
        username: data.login,
        avatar: data.avatar_url,
        url: data.html_url,
      };

      yield put(DeveloperActions.addDeveloperSuccess(developerData));
    }
  } catch (err) {
    yield put(DeveloperActions.addDeveloperFailure('Error ao adicionar desenvolvedor'));
  }
}
