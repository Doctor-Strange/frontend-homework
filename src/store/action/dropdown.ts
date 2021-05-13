import { DROP_DOWN_DISPLAY, SET_ACTIVE_ID } from "./ActionTypes";

/**
 *
 * @param company_data
 * the company data is feeded from the drop down list
 * after click on each company the data of the item will be sent to this function
 * @returns
 * the @company_data in redux either will be updated or changed by checking the type of the action @SET_ACTIVE_ID
 */
// #INTERFACE
interface ISet_active_item {
  id: number;
  ceo: string;
  company_name: string;
}
export const set_active_item = (company_data: ISet_active_item) => {
  console.log("set_active_id", company_data);
  return {
    type: SET_ACTIVE_ID,
    company_data,
  };
};

/**
 *
 * @param dropdown_display
 * it a boolean value to determine the status of the dropdown
 * @returns
 * the @dropdown_display in redux either will be updated or changed by checking the type of the action @DROP_DOWN_DISPLAY
 *
 */
export const dropdown_controller = (dropdown_display: boolean) => {
  console.log("dropdown_controller", dropdown_display);
  return {
    type: DROP_DOWN_DISPLAY,
    dropdown_display,
  };
};
