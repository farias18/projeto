import { useState } from "react";
import emailjs from "@emailjs/browser";
import Geral from "@/components/Geral";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_an8wual",
        "template_7cxrsol",
        templateParams,
        "ZhVwPACcZlOf0smNR"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO:", err);
        }
      );
  }

  return (
    <Geral>
      <p className="container">
        <h1 className="title display-3 text-center mb-5 title display-3  mb-5" style={{ fontSize: 56 }}>ENVIE SEU LEMBRETE</h1>

        <form className="form" onSubmit={sendEmail}>
          <input style={{
            width: '80%',
            margin: 0,
            padding: 10,
            border: 'none',
            marginBottom: 10,
            borderRadius: 50,
            fontSize: 25
          }}
            className="input title display-3  mb-5"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input style={{
            width: '80%',
            margin: 0,
            padding: 10,
            border: 'none',
            marginBottom: 10,
            borderRadius: 50,
            fontSize: 25
          }}
            className="input title display-3  mb-5" 
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea style={{
            width: '80%',
            margin: 0,
            padding: 10,
            border: 'none',
            marginBottom: 10,
            borderRadius: 50,
            fontSize: 25
          }}
            className="textarea title display-3  mb-5"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input style={{
            background: '#2896FF',
            color: '#f0f0f0',
            borderColor: '#2896FF',
            height: 30,
            width: 100,
            font: 'bold',
            fontFamily: 'arial,sans-serif',
            borderRadius: 8
          }}
            href={"/Tarefa"} className="button" type="submit" value="Enviar" />
        </form>
      </p>
    </Geral>
  );
}

export default App;
