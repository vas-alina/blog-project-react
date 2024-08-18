import { ACTION_TYPE } from "../action";
import { ROLE } from "../constans/role";
const initialUserState = {
  id: null,
  login: null,
  role: ROLE.GUEST,
  session: null,
};
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case ACTION_TYPE.LOGOUT: {
      return initialUserState;
    }
    default:
      return state;
  }
};
