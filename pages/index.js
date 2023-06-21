import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div>
        <h3
          className="title display-3 text-center mb-5"
          style={{ fontSize: 56, padding: 36}}
        >
          BEM VINDO(A) AO ARMAZENADOR DE TAREFAS
        </h3>
        <Card.Img
          variant="top"
          src="https://cdn-icons-png.flaticon.com/512/747/747094.png"
          style={{
            height: 300,
            width: 320,
            margin: "auto",
            display: "block",
          }}
        />
      </div>
      <div className="text-center" style={{ padding: 50 }}>
        <Button variant="primary" href={"/Usuario"}>
          <AiOutlineCheck className="me-1" />
          Entrar
        </Button>
      </div>
    </>
  );
}
