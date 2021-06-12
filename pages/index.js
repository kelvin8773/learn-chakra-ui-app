import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
  FormErrorMessage,
  FormControl,
  propNames,
} from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const loginSchema = Yup.object({
    email: Yup.string()
      .required("Email is Required")
      .min(2, "Email is too short.")
      .max(20, "Email is too long."),
    password: Yup.string()
      .required("Password is Required")
      .test(
        "validPassword",
        "Password is in correct, please enter again",
        (value) => value === "1234"
      ),
  });

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 3500));
          console.log(values);
        }}
      >
        {(formProps) => {
          const { isSubmitting } = formProps;
          console.log(formProps);

          return (
            <Form>
              <Flex
                direction="column"
                background={formBackground}
                p={12}
                rounded={6}
              >
                <Heading mb={6}>Log In</Heading>

                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                      mb={4}
                    >
                      <Input
                        {...field}
                        name="email"
                        placeholder="learn@chakra-ui.com"
                        variant="filled"
                      />
                      <FormErrorMessage pl={2} mt={1}>
                        <ErrorMessage name="email" />
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                      mb={4}
                    >
                      <Input
                        {...field}
                        id="password"
                        type="password"
                        placeholder="****"
                        variant="filled"
                      />
                      <FormErrorMessage pl={2} mt={1}>
                        <ErrorMessage name="password" />
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Button
                  type="submit"
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  mb={6}
                >
                  Log in
                </Button>
                <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
}
