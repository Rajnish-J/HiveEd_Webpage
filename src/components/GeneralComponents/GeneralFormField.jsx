import { Formik } from "formik";
import SimpleDetailForm, { InputField } from "./SimpleDetailForm";
import SendEmail from "../../api/SendEmail";
import Button from "./Button";
import { useEffect, useRef } from "react";

const templateID = "template_mx94qfi";

const GeneralFormField = ({
  initialValues,
  type,
  validationSchema,
  labelName,
  title1,
  title2,
  description1,
  description2,
  scrollToForm,
}) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (scrollToForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToForm]);

  return (
    <Formik
      // initialValues={{ name: "", email: "", message: "" }}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        const templateParams =
          type === "number"
            ? {
                to_name: values.name,
                number: values.number,
                message: values.message,
                from_name: "HiveEd",
              }
            : {
                to_name: values.name,
                to_email: values.email,
                message: values.message,
                from_name: "HiveEd",
              };

        // const templateParams = {
        //   to_name: values.name,
        //   to_email: values.email,
        //   message: values.message,
        //   from_name: "HiveEd",
        // };
        SendEmail(
          resetForm,
          setSubmitting,
          templateID,
          templateParams,
          "Message sent successfully!",
        );
      }}
    >
      {({ isSubmitting }) => (
        <SimpleDetailForm
          ref={formRef}
          className="grid grid-cols-1 gap-y-6 p-6 md:grid-cols-[auto,auto] md:gap-x-6 md:gap-y-0 md:p-10"
          title1={title1}
          title2={title2}
          description1={description1}
          description2={description2}
        >
          <InputField type="text" labelName="Full Name" name="name" />
          <InputField
            type={type}
            max={type === "number" ? 10 : 0}
            labelName={labelName}
            name={type}
          />
          <InputField labelName="Message" name="message" rows={5} />
          <div>
            <Button disabled={isSubmitting} type="primary">
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </div>
        </SimpleDetailForm>
      )}
    </Formik>
  );
};

export default GeneralFormField;
