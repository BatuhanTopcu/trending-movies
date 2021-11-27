const GRIDSW_SWITCH = "GRIDSW_SWITCH";

export const gridsw_switch = (value) => {
  return {
    type: GRIDSW_SWITCH,
    payload: value,
  };
};
