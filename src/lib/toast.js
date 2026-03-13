/**
 * Centralized toast API – use this everywhere instead of importing from "react-toastify".
 * Ensures consistent behavior and a single place to change defaults.
 */
import { toast as rtToast } from "react-toastify";

export const toast = {
  success: (message, options = {}) =>
    rtToast.success(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      ...options,
    }),

  error: (message, options = {}) =>
    rtToast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      ...options,
    }),

  info: (message, options = {}) =>
    rtToast.info(message, {
      position: "top-right",
      autoClose: 4000,
      ...options,
    }),

  warning: (message, options = {}) =>
    rtToast.warning(message, {
      position: "top-right",
      autoClose: 4000,
      ...options,
    }),

  /** Promise-based form submit: show success or error toast, no redirect */
  promise: (promise, messages = {}) =>
    rtToast.promise(promise, {
      pending: messages.pending ?? "Sending…",
      success: messages.success ?? "Sent successfully.",
      error: messages.error ?? "Something went wrong. Please try again.",
      position: "top-right",
      ...messages.options,
    }),
};

export default toast;
