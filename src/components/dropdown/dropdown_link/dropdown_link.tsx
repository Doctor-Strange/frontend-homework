import { connect } from "react-redux";
import { dropdown_controller } from "../../../store/action";
import styles from "./dropdown_link.module.scss";

const DropdownLink = ({
  company_data,
  dropdown_display,
  dropdown_controller,
}: IProps) => (
  <div
    data-test-id='dropdown_link_wrapper'
    className={styles.link}
    onClick={() => {
      // by click on the box the dropdown will be shown or disappeared
      /**
       *
       * @param dropdown_display
       * this value is read directly from the store
       *
       */
      dropdown_controller(!dropdown_display);
    }}
  >
    <div className={styles.text_wrapper}>
      <div data-test-id='ceo' className={styles.text}>
        {company_data.ceo}
      </div>
      <div data-test-id='company_name' className={styles.subtext}>
        {company_data.company_name}
      </div>
    </div>
    <i
      data-test-id='gear_icon'
      className={["material-icons-outlined", styles.icon].join(" ")}
    >
      settings
    </i>
  </div>
);

/**
 *
 * getting the values from the store
 *
 * */
const mapStateToprops = (state: any) => {
  return {
    company_data: state.reducer_dropdown.company_data,
    dropdown_display: state.reducer_dropdown.dropdown_display,
  };
};

/**
 *
 *  accessing to the methods in action and save data to the reducer
 *
 */

const mapDispatchToProps = (dispatch: any) => {
  return {
    dropdown_controller: (data: boolean) => dispatch(dropdown_controller(data)),
  };
};

// #INTERFACES
interface IProps {
  dropdown_display: boolean;
  company_data: ICompany_data;
  dropdown_controller: any;
}

interface ICompany_data {
  id: number;
  ceo: string;
  company_name: string;
}

export default connect(mapStateToprops, mapDispatchToProps)(DropdownLink);
