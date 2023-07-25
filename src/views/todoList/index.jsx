import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';
import s from "./style.module.scss";
const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];

const TodoList = () => {
    const expandedRowRender = () => {
        const columns = [
          {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Status',
            key: 'state',
            render: () => <Badge status="error" text="Finished" />,
          },
          {
            title: 'Upgrade Status',
            dataIndex: 'upgradeNum',
            key: 'upgradeNum',
          },
          {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
              <Space size="middle">
                <a>Pause</a>
                <a>Stop</a>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a>
                    More <DownOutlined />
                  </a>
                </Dropdown>
              </Space>
            ),
          },
        ];
        const data = [];
        for (let i = 0; i < 3; ++i) {
          data.push({
            key: i.toString(),
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
          });
        }
        return <Table columns={columns} dataSource={data} pagination={false} />;
      };
      const columns = [
        {
          title: '动漫名',
          dataIndex: 'animationName',
          key: 'animationName',
        },
        {
          title: '简介',
          dataIndex: 'intro',
          key: 'intro',
          width:'50%'
        },
        {
          title: '开播日期',
          dataIndex: 'premiereDate',
          key: 'premiereDate',
        },
        {
          title: '分类',
          dataIndex: 'sort',
          key: 'sort',
        },
        {
          title: '国家',
          dataIndex: 'nation',
          key: 'nation',
        },
        {
          title: '操作',
          key: 'key',
          render: () => <a>编辑</a>,
        },
      ];
      const data = [];
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i.toString(),
          name: 'Screen',
          platform: 'iOS',
          version: '10.3.4.5654',
          upgradeNum: 500,
          creator: 'Jack',
          createdAt: '2014-12-24 23:12:00',
        });
      }
  return (
    <div className={s.todolist}>
        <Table
            columns={columns}
            expandable={{
            expandedRowRender,
            defaultExpandedRowKeys: [],
            }}
            style={{width:'100%'}}
            dataSource={data}
            size="small"
        />
    </div>
  )
}

export default TodoList