import {all, takeLatest, takeEvery} from 'redux-saga/effects';
import {Types as HomeTypes} from '~/store/ducks/main';
import {Types as IntroTypes} from '~/store/ducks/intro';

import {mainRequest} from './main';
import {getIntroSaga} from './intro';

export default function* rootSaga() {
  return yield all([
    takeLatest(HomeTypes.GET_REQUEST, mainRequest),
    takeLatest(IntroTypes.GET_INTRO, getIntroSaga),
  ]);
}
