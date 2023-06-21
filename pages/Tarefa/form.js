import Geral from '../../components/Geral'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import tarefaValidator from '@/validators/tarefaValidator'
import { mask } from 'remask'

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const [usuarios, setUsuarios ] = useState([]);
  const [tipos, setTipos] = useState([]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");

    setValue(name, mask(value, mascara));
  }

  useEffect(() => {
    const usuariosSalvos = localStorage.getItem('usuarios');
    const usuariosRecuperados = JSON.parse(usuariosSalvos);
    setUsuarios(usuariosRecuperados);
  }, []);

  useEffect(() => {
    const tiposSalvos = localStorage.getItem('tipos');
    const tiposRecuperados = JSON.parse(tiposSalvos);
    setTipos(tiposRecuperados);
  }, []);


  function salvar(dados) {
    const tarefas = JSON.parse(window.localStorage.getItem('tarefas')) || []
    tarefas.push(dados)
    window.localStorage.setItem('tarefas', JSON.stringify(tarefas))
    push('/Tarefa')
  }

  return (
    <Geral>
      <Form>
          <Form.Group className="mb-3 title display-3  mb-5" style={{fontSize: 25, padding:10}} controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register('nome', tarefaValidator.nome)} />
          {errors.nome && (
            <small style={{ color: "red" }}>{errors.nome.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3 title display-3  mb-5" style={{fontSize: 25}} controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control type="text" {...register('descricao', tarefaValidator.descricao)} />
          {errors.descricao && (
            <small style={{ color: "red" }}>{errors.descricao.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3 title display-3  mb-5" style={{fontSize: 25}} controlId="dataIni">
          <Form.Label>Data Início: </Form.Label>
          <Form.Control type="text" {...register('dataIni', tarefaValidator.datainicio)} mask="99/99/9999" onChange={handleChange}/>
          {errors.datainicio && (
            <small style={{ color: "red" }}>{errors.datainicio.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3 title display-3  mb-5" style={{fontSize: 25}} controlId="dataFim">
          <Form.Label>Data Fim: </Form.Label>
          <Form.Control type="text" {...register('dataFim', tarefaValidator.datafim)} mask="99/99/9999" onChange={handleChange}/>
          {errors.datafim && (
            <small style={{ color: "red" }}>{errors.datafim.message}</small>
          )}
        </Form.Group>

        <Form.Control as="select" defaultValue=""  type="text" placeholder='Nome do Usuário' {...register('Usuario')}>
            <option value="" disabled selected>Selecione o usuário desta tarefa</option>
            {usuarios.map((usuario) => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.nome}
              </option>
            ))}
          </Form.Control>
          <Form.Control as="select" defaultValue=""  type="text" placeholder='Nome do Tipo' {...register('Tipo')}>
            <option value="" disabled selected>Selecione o tipo desta tarefa</option>
            {tipos.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.tipos}
              </option>
            ))}
          </Form.Control>
      </Form>
      <p className='text-center' style={{padding:18}}>
          <Button variant="primary" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className='me-1' />
            Salvar Tarefa
          </Button>
        </p>
    </Geral>
  )
}

export default form