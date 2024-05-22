### Criação de carro POST /tasks

Padrão de corpo

```json
{
  "name": "Car name",
  "description": "Car description",
  "brand": "Card brand",
  "year": 2023,
  "km": 10000
}
```

Padrão de resposta (STATUS: 201)

```json
{
  "id": 1,
  "name": "Car name",
  "description": "Car description",
  "brand": "Card brand",
  "year": 2023,
  "km": 10000
}
```

#### Possíveis erros:

STATUS (400) - Body não é compatível com o padrão

### Leitura de carro GET /cars

Padrão de resposta (STATUS: 200)

```json
[
  {
    "id": 1,
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
  }
]
```

### Leitura de individual GET /cars/:1

Padrão de resposta (STATUS: 200)

```json
{
  "id": 1,
  "name": "Car name",
  "description": "Car description",
  "brand": "Card brand",
  "year": 2023,
  "km": 10000
}
```

#### Possíveis erros:

STATUS (404) - Carro inválido

```json
{
  "message": "car not found"
}
```

### Atualizar carro PATCH /cars/:id

Padrão de corpo

```json
{
  "id": 1,
  "name": "Car name",
  "description": "Car description",
  "brand": "Card brand",
  "year": 2023,
  "km": 10000
}
```

Padrão de resposta (STATUS: 200)

```json
{
  "id": 1,
  "name": "Car name",
  "description": "Car description",
  "brand": "Card brand",
  "year": 2023,
  "km": 10000
}
```

#### Possíveis erros:

STATUS (404) - Carro inválido

```json
{
  "message": "Car not found"
}
```

STATUS (400) - Body não é compatível com o padrão

### Excluir carro DELETE /cars/:id

#### Possíveis erros:

STATUS (404) - Carro inválido

```json
{
  "message": "Car not found"
}
```
