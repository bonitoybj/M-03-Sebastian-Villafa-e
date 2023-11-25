//ENDPOINTS DEL SERVIDOR
import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const routes = Router();

//Rutas para el Registro de usuario

routes.post("/register", register);

//Rutas para el Login
routes.post("/login", login);

//Rutas para el Logout
routes.post("/logout", logout);

routes.get("/profile", authRequired, profile);

export default routes;
