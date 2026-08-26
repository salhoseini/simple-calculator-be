export type Operation = "add" | "subtract" | "multiply" | "divide"

export interface CalculateRequestBody {
  a: number;
  b: number;
  operation: Operation;
}

export interface CalculateResponseBody {
  result: number;
}