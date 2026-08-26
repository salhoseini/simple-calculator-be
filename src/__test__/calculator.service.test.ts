import {add, subtract, multiply, divide} from "../services/calculator.service";

describe("Calculator Service", () => {
    describe("add", () => {
        it("should return the sum of two numbers", () => {
            expect(add(2, 3)).toBe(5);
        });
        it("should return a negative number when adding two negative numbers", () => {
            expect(add(-2, -3)).toBe(-5);
        });
        it("should return the correct sum when adding a positive and a negative number", () => {
            expect(add(2, -3)).toBe(-1);
        });
        it("should handle decimals", () => {
            expect(add(2.5, 3.7)).toBeCloseTo(6.2);
        });
    });
    describe("subtract", () => {
        it("should return the difference of two numbers", () => {
            expect(subtract(5, 3)).toBe(2);
        });
        it("should return a negative number when subtracting a larger number from a smaller number", () => {
            expect(subtract(3, 5)).toBe(-2);
        });
        it("should return the correct difference when subtracting a negative number from a positive number", () => {
            expect(subtract(5, -3)).toBe(8);
        });
        it("should handle decimals", () => {
            expect(subtract(5.5, 3.2)).toBeCloseTo(2.3);
        });
    });
    describe("multiply", () => {
        it("should return the product of two numbers", () => {
            expect(multiply(2, 3)).toBe(6);
        });
        it("should return a negative number when multiplying a positive and a negative number", () => {
            expect(multiply(2, -3)).toBe(-6);
        });
        it("should return a positive number when multiplying two negative numbers", () => {
            expect(multiply(-2, -3)).toBe(6);
        });
        it("should handle decimals", () => {
            expect(multiply(2.5, 3.7)).toBeCloseTo(9.25);
        });
    });
    describe("divide", () => {
        it("should return the quotient of two numbers", () => {
            expect(divide(6, 3)).toBe(2);
        });
        it("should throw an error when dividing by zero", () => {
            expect(() => divide(6, 0)).toThrow("Division by zero is not allowed.");
        }); 
        it("should return a negative number when dividing a positive number by a negative number", () => {
            expect(divide(6, -3)).toBe(-2);
        });
        it("should handle decimals", () => {
            expect(divide(6.5, 3.2)).toBeCloseTo(2.03125);
        });
        it("Should throw excpetion when divided by zero", () =>{
            expect(() => divide(3 , 0)).toThrow("Division by zero is not allowed.");
        });
    });
});