<h1 align="center">XP Investimentos</h1>

<p align="center">
  <a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-rodar">Como rodar?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença-e-autora">Licença e Autora</a>
</p>

## Sobre
Projeto desenvolvido durante o processo seletivo da [XP Inc.](https://www.xpinc.com/). Consiste em criar uma aplicação de Mobile/Front ou Backend relacionada a investimento. Eu optei por frontend, acredito que tinha maneira mais 'fáceis' de realizar essa aplicação, porem optei por pensar grande e investir muito tempo pensando em como fazer isso da forma mais correta possível, não sei se consegue entregar tudo que foi proposto da melhor forma. Tive alguns problemas em relação a API e pois não encontrei nenhuma gratuita que seja boa o suficiente e que me traga tudo, decide por usar uma api que atualizada dia a dia de graça(limitando apenas o numero de requisição por minuto) que no caso é a [Polygon](https://polygon.io/docs/stocks/getting-started), começo deu muito trabalho porque ela trás mais de 11 mil ações, ai decide filtrar isso com uma outra api menor e de brinde complementar ainda mais a Polygon, então acabei usando a Polygon e uma api de ações feita para fins de estudo chama [api-cotacao-b3](https://api-cotacao-b3.labdo.it/).
Como eu não queria usar o Mock para nada, a minha aplicação salva as ações compradas no localStorage e isso é outra coisa que da muito problema junto com os Hooks, confere que ainda não superei os problemas disso, como por exemplo, não consigo colocar uma imagem no botão da minha tabela.
Esse projeto foi o mais desafiador que eu tive durante a trybe e eu amo isso, os problemas são essenciais para o nosso aprendizado.


### Status:
- 1 - Tela de login - Concluída ✅ - CSS: 100%
- 2 - Tela de compra - Concluída ✅ - CSS: 50% 
- 4 - Tela de saque e deposito - Concluída ✅ -CSS: 20%
- 3 - Tela de venda - 98%(As vezes crash depois da venda ser concluída)  - CSS: 50%
- 5 - Tela de cadastro 🚧 - CSS: 0
- 6 - Tela de recurar senha 🚧 - CSS: 0
- 7 - Aplicar o css em todas as telas 🚧

## Tecnologias utilizadas

Este projeto está sendo desenvolvido utilizando:

### 💻 Web
- [ReactJS](https://reactjs.org/)
- [axios](https://axios-http.com/docs/intro)
- [emailjs-com](https://www.emailjs.com/)
- [styled-components](https://styled-components.com/)
- [react-dotenv](https://www.npmjs.com/package/react-dotenv)

## Como rodar?

Execute os seguintes comandos no seu terminal:

```bash
# Clone o repositório
$ git clone git@github.com:KesleyMuniz/Processo-XP.git

# Entre no repositório
$ cd Processo-XP
```

### 💻 Web

```bash
# Instale as dependências
$ npm install

# Caso queira testar o envio de email para recuperar a senha é preciso criar algumas variáveis de ambiente no arquivo .env e essas variáveis tem que ser retirada no site da emailjs;
- REACT_APP_SERVICE_ID=XXXXXXX
- REACT_APP_TEMPLATE_ID=XXXXXXXX

# Execute a aplicação
$ npm start
# 
```
## Para fazer login você pode usar algum conta dessas
 ### [CONTAS EM MOCK SIMULANDO PESSOAS JA CADASTRADAS](https://62d8431d90883139358e6521.mockapi.io/User)
Recomendo que acesse o seu navegador pelo 'On Your Network' ao invés do localStorage, achei bem mais estável para ver o resultado.
