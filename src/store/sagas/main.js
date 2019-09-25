import {call, put} from 'redux-saga/effects';

import {Creators as mainActions} from '~/store/ducks/main';
import api from '~/services/api';
export function* mainRequest() {
  console.log('awqeweqw+5w6+q5eqw');
  try {
    const response = yield call(api.get, '/jobox/wp-json/job-api/v1/job/list');
    console.log('main-sagas-9, response:', response);
    yield put(mainActions.getmainSuccess(response.data));
  } catch (err) {
    console.log('main-sagas-12, error:', err);
    yield put(mainActions.getmainFailure());
  }
}
