// var express = require('express');
// var router = express.Router();

import express from "express";

const router = express.Router();
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/sign-in");

export default router;
