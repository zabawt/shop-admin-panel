import styled from "styled-components";

export const InputStyled = styled.input`
  ${({ theme }) => theme.mixins.input()}
`;

export const LabelStyled = styled.label`
  padding: ${({ theme }) => [theme.padding.medium, 0].join(" ")};
  font-weight: 800;
  font-family: Arial, sans-serif;
`;
