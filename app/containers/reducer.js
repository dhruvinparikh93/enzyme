import * as Types from './actionTypes';
import { LOADER_OVERLAY } from '../constants/navigation';

const initialState = {
  page: LOADER_OVERLAY,
  isLoading: false,
  isOnBoarded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.APPSTATE_CHANGE_PAGE_STATUS:
      return {
        ...state,
        ...{
          page: action.page,
        },
      };
    case Types.APPSTATE_IS_LOADING:
      return {
        ...state,
        ...{
          isLoading: action.isLoading,
        },
      };
    case Types.APPSTATE_IS_APP_ONBOARDED:
      return {
        ...state,
        ...{
          isOnBoarded: action.isOnBoarded,
        },
      };
    default:
      return state;
  }
};

export default reducer;
