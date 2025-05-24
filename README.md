# Sistema de Barbearia
Este é um sistema fictício de gerenciamento para barbearias, desenvolvido com o objetivo de facilitar o agendamento de serviços e o controle de clientes. Desenvolvi este projeto para praticar alguns conceitos de Vue.js, Vuetify e TypeScript.

**Observação:** Na pasta `backend` tem um backend fictício, criado em TypeScript, que funciona para:
- Verificar se todos os dados, no cadastro do usuário (barbeiro), foram preenchidos corretamente;
- Verificar se os dados informados durante o login, correspondem aos existentes.

## Funcionalidades
- Login/Cadastro de barbeiros;
- Verificação de dados de forma fictícia;
- Agendamento de serviços, adicionando:
  - Nome do cliente;
  - Telefone;
  - Horário do serviço;
  - Tipo de serviço: Cabelo, Barba ou Cabelo + Barba;
- Botão de logout do sistema.

## Como rodar o projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/jardsonalan/sistema-barbearia.git
   ```

2. Navegue até a pasta do projeto:
    ```bash
    cd sistema-barbearia
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

4. Execute o projeto:
    ```bash
    npm run dev
    ```

## Contribuições
Contribuições são bem-vindas! Se você deseja melhorar este projeto ou corrigir algum problema, por favor:
1. Faça um **fork** deste repositório;
2. Crie uma **branch** com a sua feature ou correção: `git checkout -b minha-feature`;
3. Faça o **commit** das suas alterações: `git commit -m 'Minha nova feature'`;
4. Envie para o **repositório remoto**: `git push origin minha-feature`;
5. Abra um **Pull Request** explicando as alterações realizadas.


## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
