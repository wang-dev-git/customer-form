import { Input as MuiInput } from "@mui/material";
import { InputHTMLAttributes } from "react";

export interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    "onChange"
  > {
  name: string;
  register: any;
  label?: string;
  onChange?: (value: string, name?: string) => void;
  error: string | undefined;
  registerProperty?: { required?: boolean; valueAsNumber?: boolean };
}

const styles = {
  textField: {
    border: "1px solid #ddd",
    backgroundColor: "#f4f4f4",
    height: "45px",
    width: "100%",
    padding: "8px 10px",
    marginTop: "5px",
    borderRadius: "30px",
    "&:before": {
      borderBottom: "none"
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "none"
    },
    "&:after": {
      borderBottom: "none"
    },
    "&:hover": {
      borderBottom: "none"
    },
    "&:autofill": {
      borderRadius: "30px"
    }
  },
  fieldError: {
    color: "red",
    fontWeight: 400,
    fontSize: "11px"
  }
};

const Input = ({
  name,
  error,
  register,
  required = true,
  registerProperty,
  ...rest
}: Props) => {
  const props = {
    ...register(name, { ...registerProperty }),
    name,
    ...rest
  };

  return (
    <div>
      <MuiInput sx={styles.textField} {...props} />
      {error && <span style={styles.fieldError}>{error}</span>}
    </div>
  );
};

export default Input;
