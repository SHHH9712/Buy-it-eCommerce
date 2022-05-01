import {
  ORDER_CREATE_REQUEST,
  ORDER_SUCCESS_REQUEST,
  ORDER_FAIL_REQUEST,
  ORDER_CREATE_RESET,
} from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_SUCCESS_REQUEST:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_FAIL_REQUEST:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
