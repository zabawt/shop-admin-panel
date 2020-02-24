import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1366px;
  margin: auto;
  padding: ${({ theme }) => theme.padding.medium}
    ${({ theme }) => theme.padding.large};
`;
