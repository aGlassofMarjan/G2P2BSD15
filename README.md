# G2P2BSD15
Group 2 Hackaton BSD-15 Repository

# HacktivMeet

## Models :
- email : string, unique (require)
- password : string (require)
- fullname : string (require)
- phoneNumber : string (require)
- profilePict : string 

## Endpoints :
List of available endpoints:
- `POST /login`
- `POST / register`

And routes below need authentication
- `GET /user`

&nbsp;

## 1. POST /login
Request:

- body:
```json
{
  "email": "string",
  "password": "string"
}
```
_Response (200 - Ok)_

```json
{
    "token": "string",
    "email": "string",
    "fullName": "string",
    "profilePict": "string",
    "phoneNumber": "string"
}
```
_Response (400 - Bad Request)_

```json
{
  "msg": "Array"
}
```

_Response (401 - Unauthorized)_

```json
{
    "msg": "Invalid email or password"
}
```
&nbsp;


## 2. POST /register
Request:

- body:
```json
{
  "email": "string",
  "password": "string",
  "fullName": "string",
  "phoneNumber": "string",
  "profilePict": "string"
}
```

_Response (201 - Created)_

```json
{
    "message": "Success create new user",
    "id": "integer",
    "email": "string"
}
```
_Response (400 - Bad Request)_

```json
{
  "msg": "Array"
}
```
&nbsp;

## 3. GET /user
- headers:
```json
{
  "Authorization": "Bearer <admin_access_token>"
}
```
_Response (200 - Ok)_

```json
{
    "user": {
        "id": "integer",
        "email": "striing",
        "fullName": "striing",
        "phoneNumber": "striing",
        "profilePict": "striing",
        "createdAt": "striing",
        "updatedAt": "striing"
    }
}
```
_Response (401 - Unauthorized)_
```json
{
  "msg": "Array"
}
```
&nbsp;


## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Please Login First"
}
```
_Response (403 - Forbidden)_

```json
{
  "message": "You don't have any access"
}
```
_Response (404 - NotFound)_

```json
{
  "message": "Data not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```



