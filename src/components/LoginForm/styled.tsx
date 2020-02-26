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

export const InputStyled = styled.input`
  ${({ theme }) => theme.mixins.input()}
`;

export const LabelStyled = styled.label`
  padding: ${({ theme }) => [theme.padding.medium, 0].join(" ")};
  font-weight: 800;
  font-family: Arial, sans-serif;
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
