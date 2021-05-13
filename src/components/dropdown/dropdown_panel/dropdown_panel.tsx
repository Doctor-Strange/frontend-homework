import styles from "./dropdown_panel.module.scss";
import { connect } from "react-redux";
import { set_active_item, dropdown_controller } from "../../../store/action";

const DropdownPanel = ({
  company_data,
  set_active_item,
  dropdown_controller,
}: IProps) => {
  /**
   *
   * @param data
   * the data object includes the company information
   * the data will be stored to present after click on the dropdown link
   */
  const company_name_click = (data: ICompany_name_click) => {
    set_active_item(data);
    dropdown_controller(false);
  };

  return (
    <div data-test-id='dropdown-wrapper' className={styles.dropdown_container}>
      <p>YOUR COMPANIES</p>
      <ul data-test-id='companies_list' className={styles.companies_container}>
        <li
          className={[
            styles.companies,
            /**
             *
             * @param id
             * if an item has a same id, it would be activated
             *
             */
            company_data.id === 0 ? styles.active : "",
          ].join(" ")}
          onClick={() =>
            company_name_click({
              id: 0,
              ceo: "Elon Musk",
              company_name: "Viljatootja AS",
            })
          }
        >
          Viljatootja AS
        </li>
        <li
          className={[
            styles.companies,
            company_data.id === 2 ? styles.active : "",
          ].join(" ")}
          onClick={() =>
            company_name_click({
              id: 2,
              ceo: "Jane Doe",
              company_name: "Tartu Agro OÜ",
            })
          }
        >
          Tartu Agro OÜ
        </li>
        <li
          className={[
            styles.companies,
            company_data.id === 3 ? styles.active : "",
          ].join(" ")}
          onClick={() =>
            company_name_click({
              id: 3,
              ceo: "John Doe",
              company_name: "Tesla Corporation",
            })
          }
        >
          Tesla Corporation
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <i className={["material-icons-outlined", styles.icon].join(" ")}>
            phone_iphone
          </i>
          Get the mobile app
        </li>
        <li>
          <i className={["material-icons-outlined", styles.icon].join(" ")}>
            supervisor_account
          </i>
          Community
        </li>
        <li>
          <i className={["material-icons-outlined", styles.icon].join(" ")}>
            book
          </i>
          Knowledge base
        </li>
      </ul>
      <hr />
      <ul className={styles.account_control}>
        <li>
          <i className={["material-icons-outlined", styles.icon].join(" ")}>
            settings
          </i>
          Settings
        </li>
        <li data-test-id='logout' className={styles.logout}>
          <i className={["material-icons-outlined", styles.icon].join(" ")}>
            exit_to_app
          </i>
          Log out
        </li>
      </ul>
    </div>
  );
};

/**
 *
 * getting the values from the store
 *
 * */
const mapStateToprops = (state: any) => {
  return {
    company_data: state.reducer_dropdown.company_data,
  };
};

/**
 *
 *  accessing to the methods in action and save data to the reducer
 *
 */

const mapDispatchToProps = (dispatch: any) => {
  return {
    set_active_item: (data: ICompany_name_click) =>
      dispatch(set_active_item(data)),
    dropdown_controller: (data: boolean) => dispatch(dropdown_controller(data)),
  };
};

// #INTERFACES
interface IProps {
  company_data: ICompany_name_click;
  set_active_item: any;
  dropdown_controller: any;
}

interface ICompany_name_click {
  id: number;
  ceo: string;
  company_name: string;
}

export default connect(mapStateToprops, mapDispatchToProps)(DropdownPanel);
