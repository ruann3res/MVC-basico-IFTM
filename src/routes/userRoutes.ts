import { Router } from "express";
import { getUsers, createUser } from "../controllers/userController";

const router = Router();

export class UserRoutes {
  public router: Router;

  constructor() {
    this.router = router;
  }
  buildRoutes() {
    this.router.get("/", getUsers);
    this.router.post("/", createUser);
    return this.router;
  }
}
