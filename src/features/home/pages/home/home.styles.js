import { Table as TableAntd, Button as ButtonAntd } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0px 1px 16.1px 0px #00000040;
  border-bottom: 1px solid #d9d9d9;
  height: 72px;
  border-bottom-width: 1px;
  padding: 24px;
  margin-bottom: 40px;
`;

export const ContentCompany = styled.div`
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  background-color: #1890ff;
  border-radius: 50%;
  margin-right: 10px;
`;

export const CompanyText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const UserTable = styled(TableAntd)`
  .ant-table-thead > tr > th {
    background-color: #f5f5f5;
    color: #000;
    font-weight: bold;
    text-align: left;
    padding: 10px;
  }

  .ant-table-tbody > tr > td {
    background-color: #fff;
    color: #000;
    padding: 10px;
  }

  .ant-table-container {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;

export const StyledButton = styled(ButtonAntd)`
  background-color: #ffcc00;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  color: #000;

  &:hover {
    background-color: #e0b900;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px 0;
`;

export const TotalText = styled.span`
  font-size: 14px;
  color: #000;
`;
