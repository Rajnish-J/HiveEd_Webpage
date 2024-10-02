import { Form, Field, ErrorMessage } from "formik";
import { TextField, FormControl } from "@mui/material";
import { HeaderTwo, Paragraph } from "./Styles";
import { forwardRef } from "react";

const SimpleDetailForm = forwardRef(
  (
    { title1, title2, description1, description2, children, className },
    ref,
  ) => {
    return (
      <div
        ref={ref} // Attach the forwarded ref to the root div
        className={`${className} overflow-hidden rounded-xl bg-slate-50 drop-shadow-2xl`}
      >
        <div className="flex flex-col gap-4">
          <HeaderTwo
            titleFirst={title1}
            className="text-xl md:text-2xl xl:text-3xl"
            titleSecond={title2}
          />
          <div>
            <Paragraph>{description1}</Paragraph>
            {description2 && <Paragraph>{description2}</Paragraph>}
          </div>
        </div>

        <Form className="grid gap-y-6 text-center">{children}</Form>
      </div>
    );
  },
);

SimpleDetailForm.displayName = "SimpleDetailForm";

export const InputField = ({ type, max, labelName, name, rows }) => {
  return (
    <FormControl fullWidth>
      <Field
        type={type === "number" && !rows ? type : undefined}
        as={TextField}
        label={
          <span>
            {labelName}
            <span className="text-red-700">*</span>
          </span>
        }
        name={name}
        multiline={!!rows} //If rows is present, use multiline
        rows={rows || undefined} //Set rows if present
        inputProps={type === "number" && max ? { maxLength: max } : {}} //Handle maxlength for number
      />
      <ErrorMessage name={name}>
        {(errorMessage) => (
          <div className="text-start text-red-500">{errorMessage}</div>
        )}
      </ErrorMessage>
    </FormControl>
  );
};

export default SimpleDetailForm;
