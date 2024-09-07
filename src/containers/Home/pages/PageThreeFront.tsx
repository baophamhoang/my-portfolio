import {
  Box,
  Button,
  Center,
  LoadingOverlay,
  Space,
  Textarea,
  TextInput,
  Title
} from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { useState } from "react";

interface IForm {
  name: string;
  email: string;
  message: string;
}

const PageThreeFront: React.FC = () => {
  const { onSubmit, getInputProps } = useForm<IForm>({
    mode: "uncontrolled",
    initialValues: { name: "", email: "", message: "" },
    validate: {
      name: hasLength({ min: 3 }, "Must be at least 3 characters"),
      email: isEmail("Invalid email"),
      message: hasLength({ min: 3 }, "Must be at least 3 characters"),
    },
  });
  const [submitting, setSubmititng] = useState(false);

  const handleValidForm = (formValues: IForm) => {
    setSubmititng(true);
    /** TODO: Add send email fnc */
  };

  return (
    <Box>
      <Center>
        <Title order={2}>Contact me</Title>
      </Center>

      <Space h={"md"} />

      <Box>
        <LoadingOverlay
          visible={submitting}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />

        <form onSubmit={onSubmit(handleValidForm)}>
          <TextInput {...getInputProps("name")} placeholder="Your name" />
          <TextInput
            {...getInputProps("email")}
            mt="md"
            placeholder="Your e-mail"
          />
          <Textarea
            {...getInputProps("message")}
            mt="md"
            placeholder="Your message"
          />

          <Center>
            <Button type="submit" mt="md">
              Submit
            </Button>
          </Center>
        </form>
      </Box>
    </Box>
  );
};

export default PageThreeFront;
