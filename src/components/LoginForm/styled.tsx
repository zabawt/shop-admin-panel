import styled from "styled-components";

export const SubmitStyled = styled.input`
  ${props => props.theme.mixins.button()}
`;

export const FormStyled = styled.form`
  background: ${props => props.theme.colors.foregrounds.main};
`;

export const InputStyled = styled.input`
  ${props => props.theme.mixins.input()}
`;
