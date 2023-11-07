# Waner-On Life Insurance Pricing

## US-5 - Eu, como Admin, posso remover uma cobertura, para não permitir mais a precificação com esta cobertura.

Para este case, utilize um `soft delete` para remover a cobertura do banco de dados. Lembre-se que os itens deletados não devem poder ser utilizados na precificação.

**PATCH** `/coverage/:coverageId`

Request Payload

```json
No Body
```

Response Payload - HTTP STATUS `204`

```json
No Body Returned
```

Error Response - HTTP STATUS `400` (especificar para cada erro tratado)

```json
{
  "error": {
    "code": 400,
    "message": "CoverageId doesnt exists"
  }
}
```
