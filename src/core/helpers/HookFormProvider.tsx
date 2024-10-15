import React from "react";
import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { User } from "../types/user";

export const HookFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useForm<User>({ mode: "onChange" });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
