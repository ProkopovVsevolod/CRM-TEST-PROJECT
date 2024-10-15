export interface RegistrationSettings {
  name: {
    required: string;
    maxLength: {
      value: number;
      message: string;
    };
    minLength: {
      value: number;
      message: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  };
  city: {
    required: string;
  };
  birthdayDate: {
    required: string;
    validate: (value: string) => boolean | string;
    valueAsDate: boolean;
  };
  birthdayTime: {
    required: string;
  }
}

export const registrationValidationSettings: RegistrationSettings = {
  name: {
    required: "Имя обязательно для заполнения",
    minLength: {
      value: 2,
      message: "Имя должно быть длинее 2 символов!",
    },
    maxLength: {
      value: 20,
      message: "Имя должно быть не больше 20 символов!",
    },
    pattern: {
      value: /^[а-яА-ЯёЁ\s-]+$/,
      message: "Имя не должно содержать цифры и знаки препинания",
    },
  },
  city: {
    required: "Город обязателен для выбора",
  },
  birthdayDate: {
    required: "Дата рождения обязательна",
    validate: (value: string) => {
      const currentDate = new Date();
      const birthDate = new Date(value);
      if (birthDate > currentDate) {
        return "Вы не можете быть младше текущей даты";
      }
      return true;
    },
    valueAsDate: true,
  },
  birthdayTime: {
    required: "Время рождения обязательно"
  }
};
