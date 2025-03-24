import React, { useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  SearchContainer,
  SearchInput,
  UserTitle,
} from '../../components/SearchContainer/searchContainer.styles';
import { useHandlers } from '../../handlers/useHandlers';

import {
  Container,
  Header,
  UserTable,
  CompanyText,
  Circle,
  ContentCompany,
  PaginationContainer,
} from '../../pages/home/home.styles';
import { WelcomeScreen } from '../../../../pages/Welcome';
import { useUtils } from '../../utils/useUtils';
import { useUserList } from '../../querys/useUserList';
import { columns } from '../../constants/tableColums';
import { usePaginationFunctions } from '../../functions/usePaginationFunctions';
import { CustomPagination } from '../../components/CustomPagination/CustomPagination';
import { logout } from '../../../../store/auth/authSlice';
import { Auth } from '../../../auth/pages/auth';
import { filteredUsers } from '../../functions/filteredUsers';
import { exportToExcel } from '../../functions/exportUser';
export const Home = () => {
  const { page, per_page, setSearchParams } = useUtils();
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useUserList(page, per_page);
  const [search, setSearch] = useState('');

  const { mappedUsers, mappedPagination } = useHandlers(data?.data || [], data);

  const { firstPage, previousPage, nextPage, lastPage } = usePaginationFunctions(
    setSearchParams,
    mappedPagination,
  );

  const { userData } = useSelector((state) => state.userData);
  const email = userData.email;

  if (isLoading) {
    return <WelcomeScreen />;
  }
  if (!email) {
    return <Auth />;
  }

  if (isError) {
    return <div>Ocorreu um erro: {error.message}</div>;
  }
  const handleLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={handleLogout}>
        Sair
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <Header>
        <ContentCompany>
          <Circle />
          <CompanyText>Nome da empresa</CompanyText>
        </ContentCompany>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button type="link">
            <span>
              {email} <DownOutlined />
            </span>
          </Button>
        </Dropdown>
      </Header>

      <SearchContainer gap="middle" vertical>
        <UserTitle>Usuários</UserTitle>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquise nome ou documento"
          enterButton
        />
      </SearchContainer>

      <div style={{ padding: '20px' }}>
        <Button onClick={() => exportToExcel(mappedUsers)} style={{ marginBottom: 16 }}>
          Exportar para Excel
        </Button>

        <UserTable
          columns={columns}
          dataSource={filteredUsers(mappedUsers, search)}
          pagination={false}
          rowKey="id"
        />
        <PaginationContainer>
          <CustomPagination
            paginationData={mappedPagination}
            firstPage={firstPage}
            previousPage={previousPage}
            nextPage={nextPage}
            lastPage={lastPage}
            setSearchParams={setSearchParams}
          />
        </PaginationContainer>
      </div>
    </Container>
  );
};
