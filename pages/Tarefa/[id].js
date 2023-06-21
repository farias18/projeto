import Geral from '../../components/Geral'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    
    if (query.id) {
      const tarefas = JSON.parse(window.localStorage.getItem('tarefas'))
      const tarefa = tarefas[query.id]

      for(let atributo in tarefa){
        setValue(atributo, tarefa[atributo]) 
      }
    }

  }, [query.id])

  function salvar(dados) {
    const tarefas = JSON.parse(window.localStorage.getItem('tarefas')) || []
    tarefas.splice(query.id, 1, dados)
    window.localStorage.setItem('tarefas', JSON.stringify(tarefas))
    push('/Tarefa')
  }

  return (
    <Geral>
      <Form>
        <Form.Group className="mb-3 title display-3  mb-5" style={{fontSize: 25}} controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3 title display-3  mb-5" style={{fontSize: 25}} controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control type="text" {...register('descricao')} />
        </Form.Group>

        <Form.Group className="mb-3 title display-3  mb-5" style={{fontSize: 25}} controlId="data">
          <Form.Label>Data: </Form.Label>
          <Form.Control type="text" {...register('data')} />
        </Form.Group>

        <p className='text-center'>
          <Button variant="primary" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className='me-1' />
            Salvar
          </Button>
        </p>
      </Form>
    </Geral>
  )
}

export default form