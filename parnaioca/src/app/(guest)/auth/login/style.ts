import styled from "@emotion/styled"; // O projeto já usa o Material UI (MUI) e não tem nenhuma necessidade de usar o styled-components

// Container centralizado na tela
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
`;

// Caixa de login com padding, borda e fundo branco
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
`;

// Wrapper para cada campo (label + input)
export const Field2 = styled.div`
  display: flex;
  flex-direction: column;
`;

// Label acima do input
export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

// Input com borda e padding
export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Botão estilizado
export const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
