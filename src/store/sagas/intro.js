import {Creators as introActions} from '~/store/ducks/intro';
import {take, put} from 'redux-saga/effects';

export function* getIntroSaga(action) {
  console.log('load saga', action);
}
