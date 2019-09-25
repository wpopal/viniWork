import Immutable from 'seamless-immutable';

// creat action
export const Types = {
  GET_REQUEST: 'emp/GET_REQUEST',
  GET_SUCCESS: 'emp/GET_SUCCESS',
  GET_FAILURE: 'emp/GET_FAILURE',
};

const initialState = Immutable({
  loading: true,
  error: false,
  data: [],
});

export const Creators = {
  getEmpRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getEmpSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {data},
  }),

  getEmpFailure: () => ({
    type: Types.GET_FAILURE,
  }),
};

//Reducers
const emp = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };

    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default emp;
