# Arquitetura

### Diagrama de arquitetura

![Alt text](image-url "Optional title")

A comunicação base é feito através de um http com front e back, e do back com o banco de dados através do TypeORM.

### Modelo de dados

![Alt text](image-url "Optional title")

O módulo inteiro é basicamento construído em torno da entidade membros, logo, o membro na base de dados faz a funçao de user. <br>
A escolha de salvar membro em todas as tabelas com a descrição de registro é proposital para gerar com clareza o histórico de criação das tabelas. Essa modelagem também facilita a filtragem de perfil para nível de permissão.

### Estrutura de Componentes (Frontend)

*Utilizar desenho do excalidraw e mostrar diretórios

components/headers<br>
components/footer<br>
components/sidebar<br>
components/button<br>
...<br>
app/dashboard/page<br>
app/membros/page<br>
app/membro/[id]/page<br>
app/intencao/page<br>
app/reuniao/page<br>
E todos os outros componentes baseado no croqui acima seguiriam o mesmo padrão.<br>
...<br>


### Definição da api

*Utilizar exemplo do swagger
<br>
POST/membro<br>
GET/membro<br>
GET/membro/:id<br>
PATCH/membro/:id<br>
DELETE/membro/:id<br>
Todas outras entidades seguiriam o mesmo padrão

