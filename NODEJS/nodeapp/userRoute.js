import express from "express";
import {authenticate, authorize} from "./auth.js";
import {
    register,
    login, 
    showUsers,
    userDelete,
    userUpdate,
} from "./userController.js";


const Router = express.Router();

Router.post("/register", register);
Router.post("/login", login);
Router.patch("/:id", authenticate, authorize("admin"), userUpdate);
Router.delete("/:id", authenticate, authorize("admin"), userDelete);
Router.get("/users", authenticate, authorize("admin"), showUsers);

export default Router;