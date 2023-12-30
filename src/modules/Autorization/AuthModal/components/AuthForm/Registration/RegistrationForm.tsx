import { Formik, Form, Field } from "formik";

interface MyFormValues {
  firstName: string;
}

const RegistrationForm = () => {
  const initialValues: MyFormValues = { firstName: "" };

  return (
    <Formik
      onSubmit={(values, actions) => {
        console.log({ values, actions });
      }}
      initialValues={initialValues}
    >
      <Form id="example">
        <Field id="firstName" name="firstName" placeholder="First Name" />
        <Field id="firme" name="firstNe" placeholder="First" />
        <Field id="fime" name="firs" placeholder="Firme" />
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

// style={{ minWidth: "240px", width: "380px", padding: "40px 40px 0 40px" }}
