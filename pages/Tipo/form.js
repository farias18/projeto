import tipoValidator from '@/validators/tipoValidator'
import Geral from '../../components/Geral'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'


const form = () => {

  const { push } = useRouter()
  const { register, handleSubmi, formState: { errors } } = useForm()

  function salvar(dados) {
    const tipos = JSON.parse(window.localStorage.getItem('tipos')) || []
    tipos.push(dados)
    window.localStorage.setItem('tipos', JSON.stringify(tipos))
    push('/Tipo')
  }

  return (
    <Geral>
      <Form>
        <Form.Group className="mb-3 title display-3  mb-5" style={{fontSize: 25}}> 
          <Form.Label>Tipo Tarefa: </Form.Label>
          <Form.Control type="text" {...register('tipos', tipoValidator.tipotarefa)} />
          {errors.tipotarefa && (
            <small style={{ color: "red" }}>{errors.tipotarefa.message}</small>
          )}
        </Form.Group>

        <p className='text-center'>
          <Button variant="primary" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className='me-1' />
            Salvar Tipo
          </Button>
        </p>  
      </Form>
    </Geral>
  )
}

export default form