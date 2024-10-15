import React, { FC } from "react";
import { FieldErrors } from "react-hook-form";
import { User } from "../../core/types/user";
import styles from './style.css'

interface InputProps {
  label: string;
  type: string;
  id: string;
  isRequired: boolean
  errors: FieldErrors<User>
  onChange: (...event: any[]) => void
}

const Input: FC<InputProps> = ({ label, type, id, onChange, errors, isRequired }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input 
        className={`${styles.input} ${errors[id] ? styles.error : ''}`} 
        type={type} 
        id={id} 
        onChange={onChange}
        placeholder="Введите данные" 
        required={isRequired}
      />
      {errors[id] && <span className={styles.errorMessage}>{errors[id].message}</span>}
    </div>
  );
};

export default Input;