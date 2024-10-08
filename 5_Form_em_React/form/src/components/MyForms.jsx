import { useState } from "react";
import "./MyForms.css";

const MyForms = ({ user }) => {
  // 6 - controlled inputs
  // 3 - Gerenciamento de dados
  //Se user existe ele imprime o user.name se nn retorna vazio ""
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);
  console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o Formulário");
    console.log(name, email, bio, role);

    //Validação
    //Envio dos dados e após isso
    // 7 - Limpar formulários
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/* 5- Envio de form */}
      {/* 1- Criação do formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          {/* placeholder é a dica do que digitar */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome:"
            onChange={handleName}
            value={name}
          />{" "}
        </div>
        {/* 2- Label envolvendo o input */}
        <label>
          <span>Email</span>
          {/* 4- Simplificação de manipulação de state*/}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          {/* Sempre usamos o e.target.value para pegar o valar que está vindo do input*/}
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
