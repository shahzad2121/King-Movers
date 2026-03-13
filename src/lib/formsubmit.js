/**
 * Submit form to FormSubmit.co via fetch and show toasts.
 * Keeps user on the same page (no redirect).
 */
import { toast } from "@/lib/toast";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax";

/**
 * @param {HTMLFormElement} form - The form element (action should be https://formsubmit.co/email)
 * @returns {Promise<boolean>} - true if submission succeeded
 */
export async function submitFormSubmit(form) {
  const action =
    form.getAttribute("data-formsubmit-action")?.trim() ||
    form.getAttribute("action")?.trim();
  if (!action || !action.startsWith("https://formsubmit.co/")) {
    toast.error("Invalid form configuration.");
    return false;
  }

  const formData = new FormData(form);
  const body = Object.fromEntries(formData.entries());

  try {
    const res = await fetch(FORMSUBMIT_URL + action.replace("https://formsubmit.co", ""), {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));

    if (res.ok && (data.success === true || res.status === 200)) {
      toast.success("Thanks! We'll get back to you with your quote soon.");
      form.reset();
      return true;
    }

    toast.error(data.message || "Something went wrong. Please try again.");
    return false;
  } catch (err) {
    toast.error("Network error. Please check your connection and try again.");
    return false;
  }
}
