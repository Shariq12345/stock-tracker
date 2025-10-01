"use client";
import React from "react";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: any) => {
    // Handle sign-in logic
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          register={register}
          placeholder="john.doe@example.com"
          error={errors.email}
          validation={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
        />

        <InputField
          name="password"
          label="Password"
          type="password"
          register={register}
          placeholder="********"
          error={errors.password}
          validation={{ required: "Password is required", minLength: 6 }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="emerald-btn w-full mt-5"
        >
          {isSubmitting ? "Logging In..." : "Login"}
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText="Sign Up"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;
