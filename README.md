# nodejs-jwt-mysql

Backend Nodejs JWT for AutoMOX Control System Automatic

- **Register**

Request:

```javascript
curl --location 'http://localhost:3000/api/register' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "Raul Bolivar",
    "email": "correo@email.com",
    "password": "Password01"
}'
```

Response:

```json
{
  "data": {
    "id": 3,
    "name": "Raul Bolivar",
    "email": "correo@email.com",
    "password": "$2b$10$shZPeuYlD2vatymflpSvyeA75sfZPWMUlfFTWwg6gmwv68KTOQ9B.",
    "updated_at": "2024-04-02T22:53:30.468Z",
    "created_at": "2024-04-02T22:53:30.468Z"
  },
  "message": "User registered successfully."
}
```

- **Login**

Request:

```javascript
curl --location 'http://localhost:3000/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
"email": "correo@email.com",
    "password": "Password01"
}'
```
Response:

```javascript
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEyMDk4MjUyLCJleHAiOjE3MTIxMDE4NTJ9.NmdTIjl3Rq3sbRgltVj-DPgczq8aYckzoLqc3uUgeDg",
        "token_type": "Bearer",
        "expires_in": 3600
}
```

---
*Raul Bolivar Navas **@rasysbox***