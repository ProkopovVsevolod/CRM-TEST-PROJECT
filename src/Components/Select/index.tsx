import React, { FC, useEffect, useState } from "react";
import { cities } from "../../core/utils/cities";
import { FieldErrors, useFormContext } from "react-hook-form";
import { User } from "../../core/types/user";
import styles from "./style.css";

interface SelectProps {
  label: string;
  id: string;
  isRequired: boolean;
  errors: FieldErrors<User>;
  isReadOnly: boolean;
}

const Select: FC<SelectProps> = ({
  label,
  id,
  errors,
  isRequired,
  isReadOnly,
}) => {
  const { setValue } = useFormContext<User>();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const renderOptions = () => (
    <ul>
      {cities.map((option, index) => (
        <li
          key={index}
          className={styles.option}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  useEffect(() => {
    setValue("cities", selectedOptions);
  }, [selectedOptions]);

  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectedItemContainer}>
        <label className={styles.label}>{label}</label>
        <input
          required={isRequired}
          type="text"
          className={styles.selectedOptions}
          onClick={toggleList}
          value={selectedOptions.length > 0 ? selectedOptions.join(", ") : ""}
          readOnly={isReadOnly}
        />

        <div className={isOpen ? styles.open : styles.hidden}>
          {renderOptions()}
        </div>
      </div>
      {errors[id] && (
        <span className={styles.errorMessage}>{errors[id].message}</span>
      )}
    </div>
  );
};

export default Select;
