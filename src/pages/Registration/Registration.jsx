import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
// import PropTypes from "prop-types";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors: ", errors);

  const registration = (data) => {
    console.log("data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(registration)}>
      <Grid
        container
        component={Paper}
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: 500,
          margin: "0 auto",
          p: 2,
          gap: "20px",
        }}
      >
        <Grid item xs={12}>
          <Typography align="center" variant="h2">
            Registration
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            required
            label="First Name"
            {...register("firstName", { required: true })}
          />
        </Grid>

        <Grid item>
          <TextField label="Last Name" {...register("lastName")} />
        </Grid>

        <Grid item>
          <TextField type="email" label="email" {...register("email")} />
        </Grid>

        <Grid item>
          <TextField
            type="password"
            label="password"
            {...register("password")}
          />
        </Grid>

        <Grid item>
          <TextField
            type="number"
            label="Age"
            {...register("age", { min: 18, max: 99, required: true })}
            // error={Boolean(errors.age)}
            helperText={errors.age && "Минимальный возраст от 18 лет"}
          />
        </Grid>
        <Grid item>
          <Button type="submit">Registration</Button>
        </Grid>
      </Grid>
    </form>
  );
};

Registration.propTypes = {};

export default Registration;
