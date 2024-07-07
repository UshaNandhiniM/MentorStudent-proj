import express from "express";
import { changeMentor, createStudent, getAllStudents, getPreviousMentors } from "../Controllers/studentControllers.js";

const router = express.Router();

router.post('/createStudent',createStudent)
router.get('/getAllStudents',getAllStudents)
router.put('/changeMentor/:id',changeMentor)
router.get('/getPreviousMentors/:id',getPreviousMentors)

export default router;