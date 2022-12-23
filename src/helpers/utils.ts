import { SweetAlertOptions } from "sweetalert2";

//Generate id
export const generateId = (): string => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);

  return random + date;
};

//Confirm alert options
export const config: SweetAlertOptions = {
  icon: "success",
  text: "its done!.",
  position: "top-right",
  showConfirmButton: false,
  timer: 1500
};
