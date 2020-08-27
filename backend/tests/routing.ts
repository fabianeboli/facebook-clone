import mongoose from "mongoose";
import app from "../app";
import supertest from "supertest";

const api = supertest(app);

test("posts are returned as json", async () => {
	await api
		.get("/posts")
		.expect(200)
		.expect("Content-Type", /application\/json/);
});

test("All posts have id", async () => {
	const response = await api.get("/posts");
	expect(response.body[0]._id).toBeDefined();
});

test("All users have id", async () => {
	const response = await api.get("/users");
	expect(response.body[0]._id).toBeDefined();
});

afterAll(() => {
    mongoose.connection.close();
})
