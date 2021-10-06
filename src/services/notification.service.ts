let dropDownAlertRef: any;
export function setDropdownRef(dropdownAlertRef: any) {
  dropDownAlertRef = dropdownAlertRef;
}

const notificationService = {
  notify: (
    type: string,
    title: string,
    message?: string,
    payload?: string,
    interval?: number,
  ) => {
    dropDownAlertRef?.alertWithType(type, title, message, payload, interval);
  },
};

export default notificationService;
