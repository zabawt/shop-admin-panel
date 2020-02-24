import styled from "styled-components";

export const SubmitStyled = styled.input`
  ${({ theme }) => theme.mixins.button()}
`;

export const FormStyled = styled.form`
  background: ${({ theme }) => theme.colors.foregrounds.main};
`;

export const InputStyled = styled.input`
  ${({ theme }) => theme.mixins.input()}
`;
