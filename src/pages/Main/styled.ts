import styled from 'styled-components';

export const RightSide = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const MainPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 33%;
  grid-template-rows: 1fr 100px;
  width: 100%;
  height: 100%;
  gap: 20px;
`;
