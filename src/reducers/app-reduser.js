import { ACTION_TYPE } from "../action";

const initialAppState = {
    wasLogout: false,
};
export const postReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT:
        return {
            ...state,
            wasLogout: !state.wasLogout,
        }
    default:
      return state;
  }
};
