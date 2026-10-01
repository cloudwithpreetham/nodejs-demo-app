# Node.js Demo App

A small Express.js API used as a sample application for a DevOps CI/CD pipeline. It provides a welcome endpoint, a health check, and a JSON echo endpoint.

## Requirements

- Node.js 20 or later
- npm

## Run locally

Install the dependencies and start the server:

```bash
npm install
npm start
```

The server listens on port `3000` by default. Set the `PORT` environment variable to use a different port:

```bash
PORT=8080 npm start
```

On PowerShell:

```powershell
$env:PORT = 8080
npm start
```

## API

### `GET /`

Returns the app welcome message and version.

```json
{
  "message": "Welcome to the Node.js Demo App!",
  "version": "1.0.0"
}
```

### `GET /health`

Returns HTTP `200` when the service is responding. The timestamp is generated for each request.

```json
{
  "status": "OK",
  "timestamp": "2026-10-01T00:00:00.000Z"
}
```

### `POST /api/echo`

Accepts a JSON body containing a non-empty `message` field. A successful request returns HTTP `201` with the submitted value and a receipt timestamp.

```bash
curl -X POST http://localhost:3000/api/echo \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello, API!"}'
```

Example response:

```json
{
  "echo": "Hello, API!",
  "receivedAt": "2026-10-01T00:00:00.000Z"
}
```

If `message` is missing or falsy, the endpoint returns HTTP `400`:

```json
{
  "error": "Field \"message\" is required"
}
```

## Tests

Run the Jest test suite with:

```bash
npm test
```

The tests use Supertest to exercise the application endpoints.

## Docker

Build the image from the project folder:

```bash
docker build -t nodejs-demo-app .
```

Run the container and publish its default port:

```bash
docker run --rm -p 3000:3000 nodejs-demo-app
```

The image uses the Node.js 20 Alpine base image and starts the app with `npm start`.
