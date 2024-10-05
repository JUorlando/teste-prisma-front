import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { StyledList } from "./style";

const UsersList = () => {
  const { users, loading, error } = useContext(UserContext);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <StyledList>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Nome:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Documents:</strong> <ul>
              {user.documents.map((doc) => (
                <li key={doc.id}>
                  <strong>Nome do Documento:</strong> {doc.name} <br />
                  <strong>Status:</strong> {doc.status}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </StyledList>
  );
};

export default UsersList;
