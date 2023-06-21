import Geral from "../../components/Geral";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { BsFillCheckCircleFill, BsFillPencilFill } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { IoMdShareAlt } from "react-icons/io";

const index = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    setTarefas(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("tarefas")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const tarefas = getAll();
      tarefas.splice(id, 1);
      window.localStorage.setItem("tarefas", JSON.stringify(tarefas));
      setTarefas(tarefas);
    }
  }

  function concluido(id) {
    if (confirm("Parabéns por concluir mais uma atividade! Clique em ok para continuar")) {
      const tarefas = getAll();
      tarefas.splice(id, 1);
      window.localStorage.setItem("tarefas", JSON.stringify(tarefas));
      setTarefas(tarefas);
    }
  }

  return (
    <Geral>
      <Table striped bordered hover>
        <Row md={1}>
          <Col md={4}>
            {tarefas.map((item, i) => (
              <CardGroup key={i}>
                <Card className="text-center">
                  <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/747/747094.png" style={{ height: 140, width: 160, margin: 'auto', display: 'block', padding: 4 }} />
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Nome da Tarefa:</strong> {item.nome}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Descrição da Tarefa:</strong> {item.descricao}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Data Fim:</strong> {item.dataFim}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Responsável:</strong> {item.Usuario}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Tipo Tarefa:</strong> {item.Tipo}
                      </ListGroup.Item>
                    </ListGroup>
                    <Link href={"/Lembrete"}>
                      <p
                        className="text-center mb-3 title display-3  mb-5"
                        style={{
                          fontStyle: "italic",
                          color: "black",
                          textDecoration: 'none',
                          padding: 10,
                          textDecoration: 'none',
                          fontSize: 15
                        }}
                      >
                        Desejo enviar um lembrete de atividade.
                      </p>
                    </Link>
                    <p>
                      <Link href={"/Tarefa/" + i}>
                        <BsFillPencilFill className="me-2 text-dark" />
                      </Link>
                      <AiOutlineDelete
                        onClick={() => excluir(i)}
                        className="text-dark"
                      />
                      <BsFillCheckCircleFill onClick={() => concluido(i)} className="text-dark"/>
                    </p>
                  </Card.Body>
                </Card>
              </CardGroup>

            ))}
          </Col>
        </Row>
      </Table>
      <p className="text-center">
        <Link href={"/Tarefa/form"} className="btn btn-primary mb-2 ">
          <GoTasklist className="me-1" />
          Nova Tarefa
        </Link>
      </p>
    </Geral>
  );
};

export default index;
