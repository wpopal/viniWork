import {all, takeLatest, takeEvery} from 'redux-saga/effects';
import {Types as MainTypes} from '~/store/ducks/main';
import {Types as EmpTypes} from '~/store/ducks/employer';

import {mainRequest} from './main';
import {empRequest} from './employer';

export default function* rootSaga() {
  return yield all([
    takeLatest(MainTypes.GET_REQUEST, mainRequest),
    takeLatest(EmpTypes.GET_REQUEST, empRequest),
  ]);
}
