import express from "express";
const route=express.Router();
import {create} from "../Controller/userController.js";

route.post("/create",create);




export default route;