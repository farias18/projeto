const usuarioValidator = {
  nome: {
    required: 'O campo é obrigatório!',
    minLength: {
      value: 3,
      message: "Mínimo de 3 caracteres!",
    },
    maxLength: {
      value: 100,
      message: "Máximo de 100 caracteres!",
    },
  },
  email: {
    required: 'O campo é obrigatório!',
    maxLength: {
      value: 100,
      message: "Máximo de 100 caracteres!",
    },
  },
  senha: {
    required: 'O campo é obrigatório!',
    maxLength: {
      value: 100,
      message: "Máximo de 100 caracteres!",
    },
  },
  telefone: {
    required: 'O campo é obrigatório!'
  }
};

export default usuarioValidator;
