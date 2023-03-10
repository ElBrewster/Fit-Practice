import express from "express";

const router = express.Router();

router.get(`/`, function (req, res) {
	res.status(200).json({msg: `It's a GET request.`});
});

router.post(`/`, function (req, res) {
	res.status(200).json({msg: `It's a POST request.`});
});

router.put(`/`, function (req, res) {
	res.status(200).json({msg: `It's a PUT request.`});
});

router.delete(`/`, function (req, res) {
	res.status(200).json({msg: `It's a DELETE request.`});
});

export default router;

//npm run server
//go to: http://localhost:5500/hello