import Geral from "../../components/Geral";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardGroup,
  Col,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import {
  AiFillDelete,
  AiOutlineUserAdd,
} from "react-icons/ai";

const index = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("usuarios")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const usuarios = getAll();
      usuarios.splice(id, 1);
      window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
      setUsuarios(usuarios);
    }
  }

  return (
    <Geral>
      <Table striped bordered hover>
        <h1
          className="title display-3 text-center mb-5"
          style={{ fontSize: 56 }}
        >
          CADASTRE UM USUÁRIO
        </h1>
        <Row md={4}>
          <Col md={3}>
            {usuarios.map((item, i) => (
              <CardGroup key={i}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://cdn-icons-png.flaticon.com/512/747/747094.png"
                    style={{
                      height: 180,
                      width: 220,
                      margin: "auto",
                      display: "block",
                      padding: 4,
                    }}
                  />
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Nome:</strong> {item.nome}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Email:</strong> {item.email}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Telefone:</strong> {item.telefone}
                    </ListGroup.Item>
                  </ListGroup>
                  <p className="text-center">
                    <AiFillDelete onClick={() => excluir(i)} />
                  </p>
                </Card>
              </CardGroup>
            ))}
          </Col>
        </Row>
      </Table>
      <p className="text-center">
        <Link
          href={"/Usuario/form"}
          className="btn btn-primary mb-2 title display-3 text-center mb-5"
        >
          Novo Usuário
        </Link>
      </p>
    </Geral>
  );
};

export default index;
