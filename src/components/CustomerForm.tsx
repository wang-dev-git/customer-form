import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import Input from "./Input";
import { postcodeValidator } from "postcode-validator";

import TextMask from "./TextMask";

export default function CustomerForm() {
  const schema = Yup.object().shape({
    firsName: Yup.string(),
    lastName: Yup.string(),
    birthDay: Yup.string(),
    age: Yup.string(),
    pvcNumber: Yup.string().required("Please Input Valid cpf number!")
  });

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (field: any) => {
    console.log(field);
  };

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="applause">
          👋
        </span>
        Welcome
      </h1>
      <p>Complete this customer form</p>

      <Input
        name="firsName"
        required={true}
        register={register}
        placeholder="First Name"
        error={errors?.firsName?.message}
      />

      <Input
        name="lastName"
        required={true}
        register={register}
        placeholder="Last Name"
        error={errors?.lastName?.message}
      />

      <Input
        name="pvcNumber"
        required={true}
        register={register}
        placeholder="PVC Number"
        error={errors?.pvcNumber?.message}
        inputComponent={TextMask}
      />

      <Button
        sx={{ mt: 4 }}
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </div>
  );
}
