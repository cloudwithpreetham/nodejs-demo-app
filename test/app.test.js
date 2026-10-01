const request = require("supertest");
const app = require("../server");

describe("Node.js App Endpoints", () => {
  it("GET / should return 200 with welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Welcome to the Node.js Demo App!");
  });

  it("GET /health should return status OK", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual("OK");
  });
});
