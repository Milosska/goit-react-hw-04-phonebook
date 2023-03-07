import styled from 'styled-components';

export const ListElem = styled.li`
  width: 350px;
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  display: inline-block;
  margin: 0;
  padding: 5px 10px;

  border: 1px solid black;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #4369f5;
    color: white;
  }
`;
