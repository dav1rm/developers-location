/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'developers/ADD_REQUEST',
  ADD_SUCCESS: 'developers/ADD_SUCCESS',
  ADD_FAILURE: 'developers/ADD_FAILURE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  loading: false,
  data: [
    {
      username: 'diego3g',
      id: 2254731,
      avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
      html_url: 'https://github.com/diego3g',
      name: 'Diego Fernandes',
      cordinates: {
        latitude: -23.5439948,
        longitude: -46.6065452,
      },
    },
  ],
  cordinates: null,
  username: '',
  error: null,
  modalIsOpen: false,
};

export default function developers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        cordinates: action.payload.data.cordinates,
        loading: true,
        modalIsOpen: false,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        modalIsOpen: false,
        data: [
          ...state.data,
          { ...action.payload.data, cordinates: action.payload.data.cordinates },
        ],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addDeveloperRequest: data => ({
    type: Types.ADD_REQUEST,
    payload: { data },
  }),

  addDeveloperSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addDeveloperFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
