import usuarioValidator from "@/validators/usuarioValidator";
import Geral from "../../components/Geral";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";
import { mask } from "remask";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");

    setValue(name, mask(value, mascara));
  }

  function salvar(dados) {
    const usuarios = JSON.parse(window.localStorage.getItem("usuarios")) || [];
    usuarios.push(dados);
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
          <Form.Control type="text" {...register("nome", usuarioValidator.nome)} />
          {errors.nome && (
            <small style={{ color: "red" }}>{errors.nome.message}</small>
          )}
        </Form.Group>

        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="email"
        >
          <Form.Label>Email: </Form.Label>
          <Form.Control type="text" {...register("email", usuarioValidator.email)} />
          {errors.email && (
            <small style={{ color: "red" }}>{errors.email.message}</small>
          )}
        </Form.Group>

        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="telefone"
        >
          <Form.Label>Telefone: </Form.Label>
          <Form.Control
            type="text"
            {...register("telefone", usuarioValidator.telefone)}
            mask="(99) 99999-9999"
            onChange={handleChange}
            
          />
            {errors.telefone && (
            <small style={{ color: "red" }}>{errors.telefone.message}</small>
          )}
        </Form.Group>

        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="senha"
        >
          <Form.Label>Senha: </Form.Label>
          <Form.Control type="password" {...register("senha", usuarioValidator.senha)} />
          {errors.senha && (
            <small style={{ color: "red" }}>{errors.senha.message}</small>
          )}
        </Form.Group>

        <p className="text-center">
          <Button variant="primary" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className="me-1" />
            Salvar Usuário
          </Button>
        </p>
      </Form>
    </Geral>
  );
};

export default form;
