import Geral from "../../components/Geral";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (query.id) {
      const usuarios = JSON.parse(window.localStorage.getItem("usuarios"));
      const usuario = usuarios[query.id];

      for (let atributo in usuario) {
        setValue(atributo, usuario[atributo]);
      }
    }
  }, [query.id]);

  function salvar(dados) {
    const usuarios = JSON.parse(window.localStorage.getItem("usuarios")) || [];
    usuarios.splice(query.id, 1, dados);
    window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
    push("/Usuario");
  }

  return (
    <Geral>
      <Form>
        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="nome"
        >
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="email"
        >
          <Form.Label>Email: </Form.Label>
          <Form.Control type="text" {...register("email")} />
        </Form.Group>

        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="telefone"
        >
          <Form.Label>Telefone: </Form.Label>
          <Form.Control type="text" {...register("telefone")} />
        </Form.Group>

        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="senha"
        >
          <Form.Label>Senha: </Form.Label>
          <Form.Control type="password" {...register("senha")} />
        </Form.Group>

        <p className="text-center">
          <Button variant="primary" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className="me-1" />
            Salvar
          </Button>
        </p>
      </Form>
    </Geral>
  );
};

export default form;
