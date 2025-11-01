import styled from '@emotion/styled';

export const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%; 

  &:hover {
    background-color: #e5e7eb; /* cinza ainda mais claro ao passar o mouse (bg-gray-200) */
  }
`;