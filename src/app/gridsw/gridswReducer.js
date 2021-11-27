const initialState = {
  grid: false,
};

const GRIDSW_SWITCH = "GRIDSW_SWITCH";

export const gridswReducer = (state = initialState, action) => {
  switch (action.type) {
    case GRIDSW_SWITCH: {
      return {
        ...state,
        grid: action.payload,
      };
    }
    default:
      return state;
  }
};
