# Seleção da Empresa Box

## Sistema de Dashboard

Este projeto foi desenvolvido como parte do processo seletivo para uma vaga de estágio na Empresa Box. O sistema de dashboard está dividido em duas partes: Front-End e Back-End. A seguir, descrevo como configurei e implementei o projeto.

## Front-End

Para a etapa de Front-End, criei um projeto React utilizando Vite para inicializar o projeto e utilizei a versão LTS do Node. Segui o mockup disponibilizado no Figma para a interface.

### Instruções de Instalação e Execução

1. Navegue até a pasta `frontend`:
    ```bash
    cd frontend
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Execute o projeto:
    ```bash
    npm run dev
    ```

## Back-End

Na etapa de Back-End, clonei o repositório do projeto, executei os comandos presentes no README, e implementei os endpoints faltantes utilizando Sequelize como ORM para o banco de dados.

### Instruções de Instalação e Execução

1. Navegue até a pasta `backend`:
    ```bash
    cd backend
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Execute as migrações do banco de dados:
    ```bash
    npx sequelize db:migrate
    ```

4. Execute as seeds do banco de dados:
    ```bash
    npx sequelize db:seed:all
    ```

5. Execute o servidor:
    ```bash
    npm run dev
    ```

## Informações de Login

Utilize as credenciais abaixo para acessar o sistema:

- **Email (usuário):** joao.silva@example.com
- **Senha:** senha123


