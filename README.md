# 💳 Projeto de API de Pagamento com Integração de Frontend

Este projeto consiste em uma **API de Pagamento** desenvolvida com **Java** e **Spring Boot**, que se comunica com o **Stripe** para processar pagamentos de forma segura. O backend gerencia operações de pagamento, enquanto o frontend foi desenvolvido em **React** para oferecer uma interface amigável e intuitiva ao usuário.

## 🚀 Tecnologias Utilizadas

Abaixo estão as tecnologias empregadas neste projeto, com uma breve descrição e seus ícones.

### Backend

- ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white) **Java**: Linguagem de programação usada para desenvolver a lógica do servidor.
- ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) **Spring Boot**: Framework que facilita a criação de aplicativos de backend robustos e escaláveis.
- ![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white) **Stripe API**: API usada para realizar e gerenciar os pagamentos online.
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) **PostgreSQL**: Banco de dados relacional para armazenamento de dados de transações.

### Frontend

- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) **React**: Biblioteca JavaScript para a criação de interfaces de usuário interativas e dinâmicas.
- ![React Stripe JS](https://img.shields.io/badge/Stripe_JS-008CDD?style=for-the-badge&logo=stripe&logoColor=white) **React Stripe.js**: Biblioteca oficial da Stripe para integrar os elementos de pagamento no frontend.
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) **CSS**: Utilizado para estilizar o frontend, proporcionando uma interface agradável e intuitiva para o usuário.

### Ferramentas

- ![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ-000000?style=for-the-badge&logo=intellij-idea&logoColor=white) **IntelliJ IDEA**: IDE usada para desenvolver o backend em Java.
- ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white) **Visual Studio Code**: Editor de código usado para desenvolver o frontend em React.
- ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) **Postman**: Ferramenta de teste de API, utilizada para validar e depurar as funcionalidades do backend.

## 📜 Descrição do Projeto

A **API de Pagamento** permite realizar transações de pagamento de maneira fácil e segura. Ao preencher o formulário de pagamento, o usuário envia as informações para o backend, que processa a solicitação usando o **Stripe**. O sistema é dividido em duas partes principais:

1. **Backend (Java + Spring Boot)**:
   - Gerencia as requisições de pagamento, valida e armazena os dados.
   - Utiliza o **Stripe** para criar e autenticar pagamentos com segurança.
   - Registra transações no **PostgreSQL** para consulta e auditoria.

2. **Frontend (React)**:
   - Interface que permite ao usuário inserir as informações do cartão de crédito.
   - Exibe uma prévia do cartão preenchido dinamicamente.
   - Integra o **React Stripe.js** para gerenciar de forma segura os dados do cartão de crédito.

---

Desenvolvido para fornecer uma base sólida para implementações de pagamentos online, este projeto pode ser expandido para incluir funcionalidades como histórico de transações, notificações e suporte para múltiplas moedas.

---

**Tags**: ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

