"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parser
app.use(express_1.default.json());
//middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
//router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/V1/users', userRouter);
app.use('/api/V1/courses', courseRouter);
userRouter.post('/createUser', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        massage: "User is created successfully",
        data: user,
    });
});
courseRouter.post('/createCourse', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        massage: "Course is created successfully",
        data: course,
    });
});
app.get('/', logger, (req, res) => {
    res.send('Hello devs!');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "Successfullu received data"
    });
});
exports.default = app;
