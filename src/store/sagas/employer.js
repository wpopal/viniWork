import {call, put} from 'redux-saga/effects';

import {Creators as empActions} from '~/store/ducks/employer';
import api from '~/services/api';
export function* empRequest() {
  console.log('awqeweqw+5w6+q5eqw');
  try {
    const response = yield call(
      api.get,
      '/jobox/wp-json/job-api/v1/employer/list',
    );
    console.log('Emp-sagas-9, response:', response);
    yield put(empActions.getEmpSuccess(response.data));
  } catch (err) {
    console.log('Emp-sagas-12, error:', err);
    yield put(empActions.getEmpFailure());
  }
}
