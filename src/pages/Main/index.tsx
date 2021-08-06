import React from 'react';
import { Button, Row, Progress, Tabs } from 'antd';
import { MainPage, RightSide } from './styled';
import Form from './Form';
import { Wrapper } from 'components';
import TextArea from 'antd/lib/input/TextArea';
import { MainProvider, useMain } from './context';

const Main: React.FC = () => {
  const { textAreaValues } = useMain();

  return (
    <MainPage>
      <Form />
      <RightSide>
        <Wrapper>
          <Progress
            strokeColor={{
              to: '#108ee9',
              from: '#a2cbec'
            }}
            percent={61}
          />
        </Wrapper>
        <Wrapper>
          <TextArea style={{ height: '100%' }} value={textAreaValues} />
        </Wrapper>
      </RightSide>

      <Wrapper>{123}</Wrapper>
      <Wrapper>
        <Row align="middle" justify="space-between" style={{ height: '100%' }}>
          <Button type="primary">Отчёт</Button>
          <Button type="primary">Сброс</Button>
          <Button type="primary">Сохранить</Button>
        </Row>
      </Wrapper>
    </MainPage>
  );
};

const MainPageProvider = () => (
  <MainProvider>
    <Main />
  </MainProvider>
);

export default MainPageProvider;
