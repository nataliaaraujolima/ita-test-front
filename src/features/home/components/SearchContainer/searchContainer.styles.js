import styled from 'styled-components';
import { Flex as FlexAntd, Input, Typography as TypographyAntd } from 'antd';
const { Search } = Input;

export const UserTitle = styled(TypographyAntd)`
  font-family: Sora;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;
export const SearchContainer = styled(FlexAntd)`
  width: 1440px;
  height: 108px;
  gap: 32px;
  padding: 24px;
  justify-content: center;
`;

export const SearchInput = styled(Search)`
  width: 328px;
  height: 40px;

  .ant-input {
    border-radius: 8px;
    height: 40px;
  }

  .ant-input-search-button {
    background-color: #ffcc00;
    border-radius: 8px;
    height: 40px;
    border: none;
  }

  .ant-input-search-icon {
    color: #000;
  }
`;

export const TableContainer = styled(FlexAntd)`
  gap: 32px;
  padding: 24px;
  background-color: rgb(195, 195, 225);
`;
