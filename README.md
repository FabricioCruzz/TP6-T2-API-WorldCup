# API World Cup

## Clonando repositório:
```
git clone https://github.com/FabricioCruzz/TP6-T2-API-WorldCup.git
```
Em seguida:
```
cd TP6-T2-API-WorldCup
```
## Rodando o projeto localmente:
Na raiz do diretório do projeto executar:
```
cd api
```
```
npm install
```

Para subir o servidor:
```
npm start
```

## Docker

Sem o docker-compose:

Build imagem Node.js:
```
docker build -t node:alpine .
docker run -p 8087:8087 node:alpine
```

Build imagem PostgreSQL (v10.17):
```
docker build -t postgres:10.17 .
```

> **_NOTA:_** Este projeto utiliza Docker Compose. Siga as instruções abaixo para instalar.

Vide a [documentação do Docker](https://docs.docker.com/compose/install/) para instalar de acordo com o seu sistema operacional.

Para subir os containeres das aplicações basta executar na **raiz do projeto:**
```
docker-compose up
```

Rodar comando na raiz do projeto com o container sendo executado para executar o script SQL:
```
docker exec -i db-postgres psql -U postgres postgres < scriptWorldCup.sql
```
## API
Endpoints da API:

Em breve...