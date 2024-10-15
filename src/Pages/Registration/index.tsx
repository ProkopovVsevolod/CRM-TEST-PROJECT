import React, { FC } from "react";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import { User } from "../../core/types/user";
import { registrationValidationSettings } from "../../core/utils/settingsForFormValidation";
import styles from "./style.css";

const Registration: FC = () => {
  const { handleSubmit, reset, control } = useFormContext<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    console.log("Submitted data:", data);
    console.log("JSON data:", JSON.stringify(data));
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          rules={registrationValidationSettings.name}
          control={control}
          name="name"
          render={({ field, formState, }) => (
            <Input
              label="Ваше имя"
              type="text"
              id="name"
              onChange={field.onChange}
              errors={formState.errors}
              isRequired={true}
            />
          )}
        />
        <Controller
          rules={registrationValidationSettings.city}
          control={control}
          name="cities"
          render={({ formState }) => (
            <Select
              label="Города где бывали"
              id="city"
              errors={formState.errors}
              isRequired={true}
              isReadOnly={true}
            />
          )}
        />
        <Controller
          rules={registrationValidationSettings.birthdayDate}
          control={control}
          name="birthdayDate"
          render={({ field, formState }) => (
            <Input
              label="Дата рождения"
              type="date"
              id="birthdayDate"
              onChange={field.onChange}
              errors={formState.errors}
              isRequired={true}
            />
          )}
        />

        <Controller
          rules={registrationValidationSettings.birthdayTime}
          control={control}
          name="birthdayTime"
          render={({ field, formState }) => (
            <Input
              label="Время рождения"
              type="time"
              id="birthdayTime"
              onChange={field.onChange}
              errors={formState.errors}
              isRequired={true}
            />
          )}
        />

        <button
          type="button"
          className={styles.resetBtn}
          onClick={() => reset()}
        >
          Очистить
        </button>
        <input
          type="submit"
          className={styles.button}
          value="Зарегистрироваться"
        />
      </form>
    </div>
  );
};

export default Registration;
