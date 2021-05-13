import { DROP_DOWN_DISPLAY, SET_ACTIVE_ID } from "../action/ActionTypes";

const initialState = {
  company_data: {
    id: 0,
    ceo: "Elon Musk",
    company_name: "Viljatootja AS",
  },
  dropdown_display: false,
};

const reducer = (state = initialState, action: any) => {
  // checking the action type to update the state
  switch (action.type) {
    case SET_ACTIVE_ID:
      return {
        /**
         * @params ...state
         * to make changes on state without loosing the previous values
         */
        ...state,
        company_data: action.company_data,
      };
    case DROP_DOWN_DISPLAY:
      return {
        ...state,
        dropdown_display: action.dropdown_display,
      };
    default:
      return state;
  }
};

export default reducer;
