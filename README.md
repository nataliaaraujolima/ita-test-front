# Autenticação e Listagem de Usuários

## OBS ->  Criei uma branch 'refactor' de melhorias!


Este projeto é o resultado de um teste técnico com foco em **autenticação de usuários**, **listagem com paginação**, **filtros**, e **funcionalidades adicionais como exportação para Excel e ordenação alfabética**.

---

## ✨ Funcionalidades Implementadas

### 🔐 Autenticação de Usuário
- Tela de login utilizando `react-hook-form` e `yup` para validação.
- Integração com API (`reqres.in`) para simular autenticação.
- Gerenciamento de estado de autenticação com Redux.
- Redirecionamento automático de rotas após login.

### 👥 Listagem de Usuários
- Requisição de dados paginados da API.
- Paginação customizada com controle de página, próxima, anterior, primeira e última.
- Filtro por nome e email com busca dinâmica.
- Ordenação alfabética por nome e por email.
- Tabela construída com Ant Design.

### 📤 Exportar para Excel
- Exportação dos dados da tabela de usuários para um arquivo `.xlsx` com um clique.
- Utilização da biblioteca `xlsx` para conversão dos dados.

### 📄 Refatoração: Formulário Dinâmico Reutilizável (`CustomForm`)

Durante o desenvolvimento, realizei uma **refatoração** em um formulário de criação de usuários que anteriormente era **estático e repetitivo**. Para melhorar a manutenibilidade e escalabilidade do projeto, criei o componente `CustomForm`, que permite:

- Gerar formulários com base em uma configuração (`fields`)
- Validar dinamicamente com `yup`
- Reutilizar estilos e componentes personalizados
- Evitar duplicação de código em telas futuras


**Exemplo de uso:**

```jsx
<CustomForm
  fields={fieldsAddUser}
  onSubmit={handleAddUser}
  validationSchema={validationAddUserSchema}
  buttonText="Cadastrar"
/>
```

---
## 🔧 Futuras Melhorias

- **Adicionar TypeScript**  
  Integrar TypeScript ao projeto para garantir maior segurança durante o desenvolvimento e facilitar a manutenção a longo prazo.

- **Criar hooks genéricos para React Query**  
  Abstrair lógica repetida de `queries` e `mutations` em hooks reutilizáveis e fortemente tipados, melhorando a legibilidade e produtividade.



