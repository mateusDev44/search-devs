# SearchDevs

Projeto construido com o Angular 15.0.0 a versão mais atualizada e com o node na versão v16.16.0.

## Rodar o projeto

Após baixa-lo na sua máquina deve-se abrir o terminal cmd, power shell, git bash e etc... garantir que esta dentro da pasta do projeto e executar primeiramente o comando npm install para instalar todas as dependencias presentes no projeto. Essas dependências podem ser encontradas no arquivo package.json. Após instalar todas as depêndencias para rodar o projeto execute o comando ng serve.

## libs e frameworks

No projeto foi utilizado o Material e o boostrap como libs de estilização. O material foi escolhido pela sua consistência e pela sua capacidade de reutilização do código, tornando os componentes utilizados bem dinâmicos, e além de visualmente ter um desing mais atrativo. O boostrap foi escolhido para facilitar a construção de telas responsivas, com suas classes disponibilizadas fica bem mais fácil realizar a responsividade devido os seus breekpoints como: lg,md,xl e entre outros.

## Estilizações scss feitas a mão

O material tem uma infinidade de componentes, porem nem todos veem com o desing ou a cor que o layout definido pede. Portanto, a estilização na mão e utilizada, para que o componente fique idêntico ao que foi pedido. E algumas estilizações padrões que se utiliza ao decorrer da construção da tela, são feitas a mão para poder se dar uma nomeação mais fácil de ser utilizado.

## Arquitetura e estrutura

A arquitetura do projeto Angular é toda baseada em componentes e módulos. As pastas são separadas de acordo com o que vai fazer cada componente, as paginas sempre ficam na pasta pages e os componentes que vão ser utilizados em qualquer lugar são sempre colocados na pasta shared/components, para se tornar melhor a reutilização do código. Utilizando o conceito da modulação utiliza-se o Lazy loading, para facilitar na renderização dos componentes, ajudando numa melhor performance do sistema ao todo. Utilizando também os conceitos do clean code, para fazer códigos fáceis de reutilizar e de entender. Fazendo funções pequenas e com nomes sugestivos respeitando sempre o princípio da responsabilidade única.
Também e criado todas as interfaces dos dados quê vão ser retornados, para poder facilitar o que cada variável vai conter de dados e os tipos de dados que são permitidos.

## Rodar o build

Para rodar o build basta executar no terminal o comando ng build.

## Para mais informações

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Angular CLI Overview and Command Reference](https://angular.io/cli).
