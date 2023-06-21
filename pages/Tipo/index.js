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
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    setTipos(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("tipos")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const tipos = getAll();
      tipos.splice(id, 1);
      window.localStorage.setItem("tipos", JSON.stringify(tipos));
      setTipos(tipos);
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
            {tipos.map((item, i) => (
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
                      <strong>Tipo Tarefa:</strong> {item.tipos}
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
          href={"/Tipo/form"}
          className="btn btn-primary mb-2 title display-3 text-center mb-5"
        >
          Novo Tipo
        </Link>
      </p>
    </Geral>
  );
};

export default index;
