import Immutable from 'seamless-immutable';

// creat action
export const Types = {
  GET_INTRO: 'intro/GET_INTRO',
};

const initialState = Immutable({
  loading: false,
  error: false,
  xxxx: 'asdasdsa',
  data: [],
});

export const Creators = {
  getIntros: data => ({
    type: Types.GET_INTRO,
    payload: {data},
  }),
};

//Reducers
const intro = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_INTRO:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default intro;
