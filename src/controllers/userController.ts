import { Request, Response } from "express";
import { User } from "../models/userModel";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.render("users", { users });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, age } = req.body;
  const newUser = new User({ name, email, age });
  try {
    await newUser.save();
    res.redirect("/users");
  } catch (error) {
    res.status(500).send(error);
  }
};
