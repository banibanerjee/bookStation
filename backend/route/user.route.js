import express from "express";

import {login, signup, } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup",signup); //for signup user
router.post("/login",login); //for user login 

export default router;