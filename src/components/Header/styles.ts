import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  padding: 20px;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
