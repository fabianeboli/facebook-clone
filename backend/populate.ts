import mongoose from "mongoose";
import User from "./models/User.Schema";
import Post from "./models/Post.Schema";

export enum Gender {
	Male = "Male",
	Female = "Female",
	Other = "Other/Prefer not to say",
}

export const populate =  () => {

	new User({
		firstName: "John",
		lastName: "Testowy",
		hashedPassword: "testtest",
		email: "test@test.com",
		dateOfBirth: new Date().toDateString(),
		gender: Gender.Male,
	}).save();

	new User({
		firstName: "Magda",
		lastName: "Kowalska",
		hashedPassword: "testtest",
		email: "Magda@wp.pl",
		dateOfBirth: new Date().toDateString(),
		gender: Gender.Female,
	}).save();

	new User({
		firstName: "Jane",
		lastName: "Smith",
		hashedPassword: "testtest",
		email: "J231@gmail.com",
		dateOfBirth: "1990-10-10",
		gender: Gender.Other,
	}).save();

	new Post({
		firstName: "John",
		lastName: "Testowy",
		date: new Date().toDateString(),
		content: "Lorem Ipsum is simply dummy text of the printing ",
	}).save();

	new Post({
		firstName: "John",
		lastName: "Testowy",
		date: new Date().toDateString(),
		content:
			"ical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
	}).save();

	new Post({
		firstName: "John",
		lastName: "Testowy",
		date: new Date().toDateString(),
		content: ".... :((((",
	}).save();

};


