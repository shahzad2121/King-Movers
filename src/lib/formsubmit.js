/**
 * Submit form to FormSubmit.co via fetch and show toasts.
 * Keeps user on the same page (no redirect, no captcha page when _captcha is false).
 */
import { toast } from "@/lib/toast";

const FORMSUBMIT_AJAX_BASE = "https://formsubmit.co/ajax";

/**
 * @param {HTMLFormElement} form
 * @param {{ successMessage?: string }} [options]
 * @returns {Promise<boolean>}
 */
export async function submitFormSubmit(form, options = {}) {
  const { successMessage = "Thanks! We'll get back to you soon." } = options;

  const action =
    form.getAttribute("data-formsubmit-action")?.trim() ||
    form.getAttribute("action")?.trim();
  if (!action || !action.startsWith("https://formsubmit.co/")) {
    toast.error("Invalid form configuration.");
    return false;
  }

  const path = action.replace(/^https:\/\/formsubmit\.co/i, "");
  const url = `${FORMSUBMIT_AJAX_BASE}${path.startsWith("/") ? path : `/${path}`}`;

  const formData = new FormData(form);
  const body = Object.fromEntries(formData.entries());

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      toast.error(
        typeof data.message === "string" ? data.message : "Something went wrong. Please try again."
      );
      return false;
    }

    if (data.success === false || data.success === "false") {
      toast.error(
        typeof data.message === "string" ? data.message : "Something went wrong. Please try again."
      );
      return false;
    }

    toast.success(successMessage);
    form.reset();
    return true;
  } catch {
    toast.error("Network error. Please check your connection and try again.");
    return false;
  }
}
