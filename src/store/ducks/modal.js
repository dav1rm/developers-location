/**
 * Types
 */
export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  latitude: '',
  longitude: '',
  username: '',
  modalIsOpen: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return {
        ...state,
        modalIsOpen: true,
        latitude: action.payload.coordenadas.latitude,
        longitude: action.payload.coordenadas.longitude,
      };
    case Types.CLOSE:
      return {
        ...state,
        longitude: '',
        latitude: '',
        username: '',
        modalIsOpen: false,
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  openModal: coordenadas => ({
    type: Types.OPEN,
    payload: { coordenadas },
  }),

  closeModal: () => ({
    type: Types.CLOSE,
  }),
};
