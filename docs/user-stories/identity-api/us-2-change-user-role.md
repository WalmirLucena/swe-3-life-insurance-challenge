# Waner-On Life Insurance Pricing

## US-2 - Eu, como Admin, alterar a role de um usuário para `user` ou `admin`

O Admin deve alterar a role de um usuário. As roles permitidas são `user` ou `admin`

**PATCH** `/users/:userId`

Request Payload

```json
{
    "role": <string>
}
```

Response Payload - HTTP STATUS 200

```json
{
    "data": {
        "userId": <string>,
        "username": <string>,
        "role": <string>
    }
}
```

Error Response - HTTP STATUS 400

```json
{
  "error": {
    "code": 400,
    "message": "Missing Token"
  }
}
```

```json
{
  "error": {
    "code": 400,
    "message": "User not already exists"
  }
}
```

Error Response - HTTP STATUS 401

```json
{
  "error": {
    "code": 401,
    "message": "You do not have permissions."
  }
}
```
