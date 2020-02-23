import styled from 'styled-components';

export const AppContainer = styled.div`
    max-width: 1366px;
    margin: auto;
    padding: ${props => props.theme.padding.medium} ${props=>props.theme.padding.large};
`;