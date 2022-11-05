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

**Docker Hub**

Baixe a [imagem da API](https://hub.docker.com/r/fabriciocruz/api-node-worldcup) com o seguinte comando:
```
docker pull fabriciocruz/api-node-worldcup
```

Build imagem do projeto:
```
docker build . -t fabriciocruz/api-node-worldcup:1.0.0
docker run -p 8087:8087 fabriciocruz/api-node-worldcup:1.0.0
```

> **_NOTA:_** Este projeto utiliza Docker Compose. Siga as instruções abaixo para instalar.

Vide a [documentação do Docker](https://docs.docker.com/compose/install/) para instalar de acordo com o seu sistema operacional.

Para subir os containeres das aplicações basta executar na **raiz do projeto:**
```
docker-compose up
```

## API
Endpoints da API:

**POST** http://localhost:8087/api/v1/worldcup

**PAYLOAD**

```
{
    "id": <number>,
    "home": <string>,
    "visitor": <string>,
    "score_home": <number>,
    "score_visitor": <number>,
    "match_date": <string>
}
```
> **_NOTA:_** O parâmetro match_date deve estar no formato "YYYY-MM-DD"

**GET** http://localhost:8087/api/v1/worldcup

**GET BY TEAM** http://localhost:8087/api/v1/worldcup/:team

**GET BY DATE - DAY** http://localhost:8087/api/v1/worldcup/date/day/:day

**GET BY DATE - MONTH** http://localhost:8087/api/v1/worldcup/date/month/:month

**PUT** http://localhost:8087/api/v1/worldcup/:matchId

**PAYLOAD**
```
{
    "id": <number>,
    "home": <string>,
    "visitor": <string>,
    "score_home": <number>,
    "score_visitor": <number>,
    "match_date": <string>
}
```

**DELETE** http://localhost:8087/api/v1/worldcup/:matchId