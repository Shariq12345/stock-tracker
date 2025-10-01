import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const InputField = ({
  name,
  label,
  type = "text",
  register,
  placeholder,
  error,
  validation,
  disabled,
  value,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register(name, validation)}
        className={cn("form-input", {
          "opacity-50 cursor-not-allowed": disabled,
          "border-red-500 focus:border-red-500 focus:ring-red-500": error,
        })}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
