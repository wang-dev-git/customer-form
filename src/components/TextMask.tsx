import { InputHTMLAttributes, forwardRef } from "react";
import { IMaskInput } from "react-imask";
const TextMask = forwardRef<any, InputHTMLAttributes<HTMLInputElement>>(
  function TextMaskCustom(props, ref) {
    const { onChange, name, ...other } = props;

    const handleAccept = (value: string) => {
      if (onChange && name) {
        onChange({ target: { name: name, value } });
      }
    };

    return (
      <IMaskInput
        mask="000-000-000.00"
        definitions={{
          "#": /[1-9]/
        }}
        inputRef={ref}
        onAccept={handleAccept}
        overwrite
        {...other}
      />
    );
  }
);

export default TextMask;
