import { Request, Response, NextFunction } from "express";
import {CalculateRequestBody , CalculateResponseBody, Operation} from "../types/calculator.types";
import { add , subtract, multiply, divide } from "../services/calculator.service";
import { BadRequestError } from "../errors/app-error";

const operations : Record<Operation, (a: number, b:number) => number> = {
    add, subtract, multiply, divide
};

function isValidOperation(value: unknown) : value is Operation {
    return typeof value == "string" && value in operations;
}

export function calculate(req: Request , res: Response, next: NextFunction) : void{
    try {
        const {a,b,operation} = req.body as Partial<CalculateRequestBody>;

        if(typeof a != "number" || Number.isNaN(a)) {
            throw new BadRequestError("Filed a must be a number");
        }
        if(typeof b != "number" || Number.isNaN(b)) {
            throw new BadRequestError("Filed b must be a number");
        }
        if(!isValidOperation(operation)) {
            throw new BadRequestError(`operation must be one of: ${Object.keys(operations).join(",")}`);
        }

        const result = operations[operation](a , b);
        const responseBody: CalculateResponseBody = {result};
        res.status(200).json(responseBody);

    } catch(err) {
        next(err);
    }
}