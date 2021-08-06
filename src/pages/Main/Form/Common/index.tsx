import React from 'react';
import { Col, Divider, Row } from 'antd';
import moment from 'moment';
import { CheckboxForm, DateForm, InputForm, SelectForm, TimePickerForm } from 'components';
import { BINARY_OPTIONS, VOLUME_OPTIONS } from 'const/options';

const Common: React.FC = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <TimePickerForm name="time" label="Длительность" placeholder="Укажите время" />
        </Col>
        <Col span={8}>
          <DateForm required name="date" initialValue={moment(new Date())} label="Дата" placeholder="Укажите дату" />
        </Col>
        <Col span={8}>
          <InputForm initialValue="Nikolay" required name="name" label="Ф.И.О." />
        </Col>
        <Col span={8}>
          <InputForm name="age" label="Возраст" />
        </Col>
        <Col span={8}>
          <SelectForm
            required
            initialValue="man"
            options={[
              { label: 'Мужской', value: 'man' },
              { label: 'Женский', value: 'woman' }
            ]}
            name="sex"
            label="Пол"
          />
        </Col>
        <Col span={8}>
          <SelectForm name="volume" options={BINARY_OPTIONS} label="Итог" />
        </Col>

        <Divider style={{ margin: '0 0 24px 0' }} />

        <Col span={8}>
          <SelectForm name="communicative" options={VOLUME_OPTIONS} label="Общение" />
        </Col>
        <Col span={8}>
          <SelectForm name="team" options={VOLUME_OPTIONS} label="Командный игрок" />
        </Col>
        <Col span={8}>
          <SelectForm name="study" options={VOLUME_OPTIONS} label="Обучаемость" />
        </Col>
        <Col span={8}>
          <SelectForm name="experience" options={VOLUME_OPTIONS} label="Опыт" />
        </Col>
        <Col span={8}>
          <CheckboxForm name="stack" label="Подходит под стек" />
        </Col>
        <Col span={8}>
          <SelectForm required initialValue={3} name="rating" options={VOLUME_OPTIONS} label="Уровень" />
        </Col>
      </Row>
    </>
  );
};

export default Common;
