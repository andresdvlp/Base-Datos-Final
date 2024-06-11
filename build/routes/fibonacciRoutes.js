"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class fibonacciRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getFibonacci(req, res) {
        const n = parseInt(req.params.n, 10);
        if (n <= 0) {
            return res.status(400).send("El número debe ser mayor que 0");
        }
        let fibonacciSeries = [];
        let num1 = 0, num2 = 1, nextTerm;
        for (let i = 1; i <= n; i++) {
            fibonacciSeries.push(num1);
            nextTerm = num1 + num2;
            num1 = num2;
            num2 = nextTerm;
        }
        res.json(fibonacciSeries);
    }
    getFibonacciToN(req, res) {
        const n = parseInt(req.params.n, 10);
        if (n <= 0) {
            return res.status(400).send("El número debe ser mayor que 0");
        }
        let fibonacciSeries = [0, 1];
        let num1 = 0, num2 = 1, nextTerm;
        for (let i = 2; i < n; i++) {
            nextTerm = num1 + num2;
            if (nextTerm <= n) {
                fibonacciSeries.push(nextTerm);
                num1 = num2;
                num2 = nextTerm;
            }
            else {
                break;
            }
        }
        res.json(fibonacciSeries);
    }
    routes() {
        this.router.get("/fibonacci/:n", this.getFibonacci);
        this.router.get("/fibonacciToN/:n", this.getFibonacciToN);
    }
}
const FibonacciRoutes = new fibonacciRoutes();
FibonacciRoutes.routes();
exports.default = FibonacciRoutes.router;
