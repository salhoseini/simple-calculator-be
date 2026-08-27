import request from "supertest";
import { createApp } from "../app";

const app = createApp();

describe("POST /api/calculate", ()=> {
    it("Should return the sum of two numbers when operation is add", async ()=>{
        const response = await request(app)
        .post("/api/calculate")
        .send( {
            a: 2,
            b: 3,
            operation: "add"
        });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({result : 5});
    });
    it("returns 400 when dividing by zero", async () => {
    const res = await request(app)
      .post("/api/calculate")
      .send({ a: 10, b: 0, operation: "divide" });

    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/division by zero/i);
  });
});