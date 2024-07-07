import express from "express";
import { assignMentorToStudent, assignStudentsToMentor, createMentor, getAllMentorsWithStudents, getAllMentors, getStudentsForMentor} from "../Controllers/mentorControllers.js";

const router = express.Router();

router.post('/createMentor',createMentor)
router.get('/getAllMentors',getAllMentors)
router.put('/assignStudentsToMentor/:id',assignStudentsToMentor)
router.put('/assignMentorToStudent/:id',assignMentorToStudent)
router.get('/getAllMentorsWithStudents',getAllMentorsWithStudents)
router.get('/getStudentsForMentor/:id',getStudentsForMentor)

export default router;