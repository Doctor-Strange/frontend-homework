import { useEffect, useRef } from "react";

import DropdownLink from "./dropdown_link/dropdown_link";
import DropdownPanel from "./dropdown_panel/dropdown_panel";
import { connect } from "react-redux";
import { dropdown_controller } from "../../store/action";
import styles from "./dropdown.module.scss";

const Dropdown = ({ dropdown_display, dropdown_controller }: IProps) => {
  /**
   * @variable dropdown_ref
   * set a reference for the wrapper of the dropdown
   */
  const dropdown_ref = useRef(null);

  useEffect(() => {
    // add an event listener to listen on clicking out side the dropdown
    document.addEventListener("mousedown", handle_click_outside);

    return () => {
      // delete the event to prevent memory leak
      document.removeEventListener("mousedown", handle_click_outside);
    };
  }, []);

  const handle_click_outside = (e: Event) => {
    // If the click have been captured out side the drop-down, the drop-down will be closed
    if (!dropdown_ref.current.contains(e.target)) {
      // status of displaying the dropdown will be updated
      dropdown_controller(false);
      return;
    }
  };
  return (
    <div className={styles.dropdown_wrapper} ref={dropdown_ref}>
      <DropdownLink />
      {/* is directly controlled from redux  */}
      {dropdown_display && <DropdownPanel />}
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

interface IProps {
  dropdown_display: boolean;
  dropdown_controller: any;
}

export default connect(mapStateToprops, mapDispatchToProps)(Dropdown);
