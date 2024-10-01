import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const SERVICE_ID = "";
const USER_KEY = "";

const SendEmail = (
  resetForm,
  setSubmitting,
  templateID,
  data,
  successMessage,
) => {
  emailjs.send(SERVICE_ID, templateID, { data }, USER_KEY).then(
    (response) => {
      toast.success(successMessage);
      resetForm();
      setSubmitting(false);
    },
    (error) => {
      toast.error("Failed to send message. Please try again later");
      setSubmitting(false);
    },
  );
};

export default SendEmail;
