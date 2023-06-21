const tipoValidator = {
    tipotarefa: {
      required: 'O campo é obrigatório!',
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
  };
  
  export default tipoValidator;
  