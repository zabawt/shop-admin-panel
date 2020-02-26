import styled from "styled-components";

export const SubmitStyled = styled.input`
  ${({ theme }) => theme.mixins.button()}
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: auto;
  position: relative;
`;

export const SpanStyled = styled.span`
  font-size: 32px;
  color: black;
  cursor: pointer;
  user-select: none;
  position: absolute;
  right: 0;
  top: calc(50% -32px);
`;
