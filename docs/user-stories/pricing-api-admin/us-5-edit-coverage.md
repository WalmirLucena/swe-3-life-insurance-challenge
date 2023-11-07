# Waner-On Life Insurance Pricing

## US-5 - Eu, como Admin, posso alterar uma cobertura, para que a precificação esteja atualizada.

A cobertura deve poder ser atualizada em qualquer campo, exceto o id gerado. E deve respeitar as mesmas regras do cadastro.

Os campos podem ser atualizados todos ou parcialmente, nesse caso, se o endpoint de edição for chamado passando apenas um campo, somente este campo deve ser alterado na cobertura.

Ao editar um item que foi deletado [US-6](./us-6-remove-coverage.md), este deve ser "ativado" novamente, sobrescrevendo o soft delete.

**PUT** `/coverage/:coverageId`

Request Payload

```json
{
	 "name": <string>,
     "description": <string>,
     "capital": <string>,
     "premium": <string>,
}
```

Response Payload - HTTP STATUS `200`

```json
{
    "data": {
        "coverageId": <string>,
        "name": <string>,
        "description": <string>,
        "capital": <string>,
        "premium": <string>
    }
}
```

Error Response - HTTP STATUS `400`

```json
{
  "error": {
    "code": 400,
    "message": "The premium provided is not valid."
  }
}
```

```json
{
  "error": {
    "code": 400,
    "message": "The capital provided is not valid."
  }
}
```

```json
{
  "error": {
    "code": 400,
    "message": "CoverageId doesnt exists"
  }
}
```

```json
{
  "error": {
    "code": 400,
    "message": "Coverage Name already exists"
  }
}
```
