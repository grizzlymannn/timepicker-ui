const options = {
  amLabel: 'AM',
  appendModalSelector: '',
  backdrop: true,
  cancelLabel: 'CANCEL',
  enableScrollbar: true,
  enableSwitchIcon: false,
  enterTimeLabel: 'Enter Time',
  focusInputAfterCloseModal: false,
  hourMobileLabel: 'Hour',
  iconTemplate: '<i class="material-icons timepicker-ui-keyboard-icon">keyboard</i>',
  iconTemplateMobile: '<i class="material-icons timepicker-ui-keyboard-icon">schedule</i>',
  incrementHours: 1,
  incrementMinutes: 1,
  inputTemplate: '',
  minuteMobileLabel: 'Minute',
  mobile: false,
  okLabel: 'OK',
  pmLabel: 'PM',
  selectTimeLabel: 'Select Time',
  switchToMinutesAfterSelectHour: false,
  theme: 'basic',
};

const types = {
  amLabel: 'string',
  appendModalSelector: 'string',
  backdrop: 'boolean',
  cancelLabel: 'string',
  enableScrollbar: 'boolean',
  hourMobileLabel: 'string',
  incrementHours: 'number',
  incrementMinutes: 'number',
  inputTemplate: 'string',
  minuteMobileLabel: 'string',
  mobile: 'boolean',
  okLabel: 'string',
  pmLabel: 'string',
  selectTimeLabel: 'string',
  switchToMinutesAfterSelectHour: 'boolean',
  iconTemplate: 'string',
  iconTemplateMobile: 'string',
  theme: 'string',
  enableSwitchIcon: 'boolean',
  focusInputAfterCloseModal: 'boolean',
};

export { types, options };
