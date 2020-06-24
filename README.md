
# ClimaCidade - Web

  

O projeto tem como foco aprendizado e demonstração de habilidades na construção de uma API Rest em NodeJs e MongoDB juntamente com uma página web em ReactJs. A aplicação **ClimaCidade** fornece ao usuário a possibilidade de buscar informações à cerca do clima de cidades através de uma busca na API [OpenWeatherMap]. Também é possível através aplicação conferir as 5 cidades mais buscadas e o histórico de buscas, ambos atualizados em tempo real com uso de [socket].

Também foi introduzido no projeto a possibilidade de uso de [docker container] para criar uma instância da API e do banco MongDB.

* Obs.: Este é o frontend web do projeto, o backend está [aqui].

### Requisitos

  

* [NodeJs] - Nodejs 10 ou superior;

### Instalação

Clonar este repositório, dentro da pasta criada, criar um arquivo .env como no exemplo .env.example contendo o endereço onde está sendo executado seu backend/API e executar o comando npm run install ou yarn install. É importante ressaltar que um backend/API é necessário para o completo funcionamento deste projeto. Em seguida, executar o comando npm start ou yarn start e após alguns segundos, uma nova aba/janela será aberta em seu navegador com o projeto em execução.

### Utilizando a aplicação

No painel esquerdo da aplicação, é possível inserir um nome de cidade e ao clicar em buscar, caso a cidade esteja disponível na api do OpenWeatherMap, as informações sobre clima desta cidade serão apresentados logo abaixo do campo de busca. Já no painel direito, na tabela superior ficam as cidades mais buscadas na aplicação, e na tabela inferior, o histórico de busca das cidades ordenadas por data e horário. Vale ressaltar que estas tabelas são atualizadas assim que qualquer usuário da aplicação faça uma busca.
  

### Contato

welingtonfidelis@gmail.com

Sugestões e pull requests são sempre bem vindos =)

  

License

----

  

MIT

  

**Free Software, Hell Yeah!**

  

[//]:  #  (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

  

[OpenWeatherMap]: <https://openweathermap.org/current>

[socket]: <https://socket.io/>

[NodeJs]: <https://nodejs.org/en/>

[docker container]: <https://www.docker.com/resources/what-container>

[Postman]: <https://www.postman.com/downloads/>

[Docker]: <https://www.docker.com/get-started>

[MongoDB]: <https://www.mongodb.com/>

[MongoDB Atlas]: <https://www.mongodb.com/cloud/atlas>

[MongoDB local]: <https://docs.mongodb.com/manual/installation/>

[neste link]: <https://home.openweathermap.org/users/sign_up>

[este arquivo]: <https://drive.google.com/file/d/1VRgWlxOq4EGwEKVqGXaj_G7F0irC6kSk/view?usp=sharing>

[aqui]: <https://github.com/welingtonfidelis/ClimaCidade-api>