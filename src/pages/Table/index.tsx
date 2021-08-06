import React from 'react';
import { Button, Select, Col, DatePicker, Form, Input, Row, Space, Checkbox, Progress } from 'antd';
import moment from 'moment';
import { Table } from 'antd';

const columns: any = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    fixed: 'left',
    align: 'center'
  },
  {
    title: 'Общая информация',
    children: [
      {
        title: 'Дата',
        dataIndex: 'date',
        width: 150,
        align: 'center'
      },
      {
        title: 'Возраст',
        dataIndex: 'age',
        width: 150,
        align: 'center'
      },
      {
        title: 'Длительность',
        dataIndex: 'time',
        width: 150,
        align: 'center'
      }
    ]
  },
  {
    title: 'Технологии',
    children: [
      {
        title: 'TS',
        dataIndex: 'ts',
        width: 50,
        align: 'center'
      },
      {
        title: 'JS',
        dataIndex: 'js',
        width: 50,
        align: 'center'
      },
      {
        title: 'React',
        dataIndex: 'react',
        width: 50,
        align: 'center'
      },
      {
        title: 'Antd',
        dataIndex: 'ant',
        width: 50,
        align: 'center'
      },
      {
        title: 'Задача',
        dataIndex: 'task',
        width: 50,
        align: 'center',
        render: () => '2 / 3'
      }
    ]
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    width: 80,
    fixed: 'right',
    align: 'center'
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    status: 'Approved'
  });
}

const TablePage: React.FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      size="middle"
      scroll={{ x: 'calc(700px + 50%)', y: 'calc(100vh - 250px)' }}
    />
  );
};

export default TablePage;
