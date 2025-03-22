import React from 'react';
import { Spin, Typography, Row, Col, Space } from 'antd';
import { Container } from './welcome.styles';

const { Title, Text } = Typography;

export const WelcomeScreen = () => {
  return (
    <Container>
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <Col>
          <Space direction="vertical" align="center">
            <Title level={2}>Bem-vindo!</Title>
            <Text style={{ fontSize: '16px', textAlign: 'center' }}>
              Estamos autenticando você, por favor aguarde...
            </Text>
            <Spin size="large" tip="Carregando..." />
          </Space>
        </Col>
      </Row>
    </Container>
  );
};
