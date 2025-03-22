import React, { memo } from 'react';
import { Button, Pagination } from 'antd';
import { Container } from './CustomPagination.styles';

export const CustomPagination = memo(
  ({ paginationData, previousPage, nextPage, setSearchParams }) => {
    const { page, total } = paginationData;

    return (
      <Container>
        <span style={{ fontSize: '14px', fontWeight: '500', marginRight: '16px' }}>
          Total {total} usuários
        </span>

        <Pagination
          current={page}
          total={total}
          pageSize={10}
          onChange={(page) => {
            setSearchParams({ page });
          }}
          showSizeChanger={false}
          showQuickJumper={false}
          itemRender={(current, type, originalElement) => {
            switch (type) {
              case 'page':
                return <span>{current}</span>;

              case 'prev':
                return (
                  <Button type="link" onClick={previousPage} disabled={page === 1}>
                    {'<'}
                  </Button>
                );

              case 'next':
                return (
                  <Button
                    type="link"
                    onClick={nextPage}
                    disabled={page === paginationData.total_pages}
                  >
                    {'>'}
                  </Button>
                );

              case 'jump-prev':
              case 'jump-next':
                return <span>⋯</span>;

              default:
                return originalElement;
            }
          }}
        />

        <span style={{ fontSize: '14px', fontWeight: '500', marginLeft: '16px' }}>{total}</span>
      </Container>
    );
  },
);
