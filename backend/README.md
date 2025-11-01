# Daily Seed Backend API

Backend API para aplicação de versículos bíblicos diários.

## Estrutura do Projeto

```
src/
├── domain/           # Entidades e regras de negócio
├── application/      # Casos de uso e DTOs
├── infrastructure/   # Implementações concretas
└── presentation/     # Controllers, rotas e middlewares
```

## Instalação

```bash
npm install
cp .env.example .env
```

## Execução

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

## Endpoints

- `GET /api/verses/random` - Busca versículo aleatório aprovado
- `POST /api/verses` - Cria novo versículo para aprovação
- `GET /health` - Health check