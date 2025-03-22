import { Avatar } from 'antd';
import { StyledButton } from '../pages/home/home.styles';

export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nome completo',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Avatar src={record.avatar} />
        {text}
      </div>
    ),
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: 'Ações',
    key: 'actions',
    render: () => <StyledButton>Mais detalhes</StyledButton>,
  },
];
