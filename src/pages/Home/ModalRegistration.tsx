import React from "react";
import { Modal, Typography, Button } from "@mui/material";
import {
  FormContainer,
  ModalContainer,
  ModalInput,
} from "./StyledComponents/ModalRegisctration.styled";
import { useFormik } from "formik";
import { registrationSchema } from "../../validation/registrationSchema";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const ModalRegistration = ({ open, handleClose }: Props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      surname: "",
    },
    validationSchema: registrationSchema,
    onSubmit: () => handleClose(),
  });

  return (
    <Modal open={open} onClose={handleClose} sx={{ display: "flex" }}>
      <ModalContainer>
        <FormContainer onSubmit={formik.handleSubmit}>
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            REGISTRATION
          </Typography>
          <ModalInput
            id="name"
            name="name"
            variant="standard"
            autoComplete="off"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <ModalInput
            id="surname"
            name="surname"
            variant="standard"
            autoComplete="off"
            label="Surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
          <ModalInput
            id="email"
            name="email"
            variant="standard"
            autoComplete="off"
            label="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <ModalInput
            id="password"
            name="password"
            type="password"
            variant="standard"
            autoComplete="off"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button variant="contained" sx={{ marginTop: "20px" }} type="submit">
            Submit
          </Button>
        </FormContainer>
      </ModalContainer>
    </Modal>
  );
};

export default ModalRegistration;
