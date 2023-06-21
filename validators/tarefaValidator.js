const tarefaValidator = {
    nome: {
      required: "O campo é obrigatório!",
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres!",
      },
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
    descricao: {
      required: "O campo é obrigatório!",
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
    datainicio: {
        required: 'Data de início obrigatório!'
       },
       datafim: {
        required: 'Data final obrigatório!'
       },
  };
  
  export default tarefaValidator;
  