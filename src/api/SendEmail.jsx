import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const SERVICE_ID = "service_6uhke5t";
const USER_KEY = "2PSCK2nhr14QD_uSa";

const SendEmail = (
  resetForm,
  setSubmitting,
  templateID,
  data,
  successMessage,
) => {
  emailjs.send(SERVICE_ID, templateID, data, USER_KEY).then(
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
