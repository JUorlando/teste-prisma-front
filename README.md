## React Demo - Teste Prisma API

    Este projeto é uma demonstração de uma aplicação React que consome a API do projeto teste-prisma-api. O foco principal desta aplicação é demonstrar a utilização de React para renderização da rota de listagem de usuários, enquanto segue boas práticas de estruturação de código, organização de rotas, controllers e models. A modelagem de dados foi feita com Prisma, e o projeto usa estilização simples para exibir informações.

**Índice**

    Sobre o Projeto
    Tecnologias Utilizadas
    Instalação e Configuração
    Como Rodar a Aplicação
    Funcionalidades Implementadas
    Organização do Código
    Contato
    Licença

**Sobre o Projeto**

    Esta aplicação React se comunica com a API teste-prisma-api, simulando a listagem de usuários armazenados em um banco de dados. A estrutura do projeto segue boas práticas de organização de rotas, controllers e models, utilizando Prisma para a modelagem dos dados.

    A aplicação utiliza chamadas assíncronas para buscar os dados e renderizá-los na interface, mantendo um design simples e funcional. O foco não é na aparência, mas sim em mostrar a integração correta entre React e API, seguindo uma estrutura de código bem organizada e de fácil manutenção.

**Tecnologias Utilizadas**

    React: Biblioteca JavaScript para construção de interfaces de usuário.
    Axios: Para realizar as chamadas HTTP à API.
    Context API: Para gerenciar o estado global da aplicação.
    React Router DOM: Para a definição de rotas dentro da aplicação.
    Prisma: Utilizado no backend para a modelagem e interação com o banco de dados.
    JavaScript/TypeScript: Linguagens principais do projeto.
    CORS: Gerenciamento de permissões entre o front e o backend.

**Instalação e Configuração**

1. Clonar o repositório:

    https://github.com/JUorlando/teste-prisma-front.git

2. Instalar as dependências:

    npm install

3. Configurar as variáveis de ambiente:

    Certifique-se de que o backend do projeto teste-prisma-api esteja rodando na porta correta, ou altere a baseURL no arquivo api.js para apontar para a URL correta da API.

4. Iniciar a aplicação:

    npm start

**Como Rodar a Aplicação**

    Após seguir os passos de instalação, execute npm start no terminal para rodar a aplicação. A aplicação estará acessível localmente na URL:
    http://localhost:3000
    Certifique-se de que o backend da API também está rodando (por exemplo, em http://localhost:8888).

**Funcionalidades Implementadas**

    Listagem de Usuários: A aplicação faz uma chamada à rota /api/users para buscar todos os usuários disponíveis na API e renderizá-los na interface.

    Gerenciamento de Estado Global: Através da Context API, o estado dos usuários é gerenciado centralmente, permitindo fácil acesso a partir de qualquer componente.

**Organização do Código**

    A aplicação foi desenvolvida seguindo boas práticas de organização de código. Cada funcionalidade foi separada em contextos e componentes, facilitando a escalabilidade e manutenção.

    Rotas: São definidas de forma clara e objetiva, utilizando o React Router DOM.
    Context API: Para gerenciar o estado dos usuários em toda a aplicação, mantendo uma abordagem centralizada de gestão de dados.
    Axios: Para fazer as chamadas HTTP de forma eficiente e organizada.

**Contato**

    Desenvolvedor: José Orlando de Carvalho Júnior
    E-mail: juniororlandocv@gmail.com

**Licença**

    Este projeto está licenciado sob a MIT License.
