import { Request, Response } from "express";
import { NextFunction } from "connect";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  //middleware function
  let formatted_date = new Date().toLocaleString();

  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  const start = process.hrtime();
  const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);
  let log = `[${formatted_date}] ${method}:${url} ${status} ${
    durationInMilliseconds.toLocaleString() + "ms"
  }`;
  console.log(log);
  next();
}

function getActualRequestDurationInMilliseconds(start?: [number, number]): any {
  const NS_PER_SEC = 1e9; // convert to nanoseconds
  const NS_TO_MS = 1e6; // convert to milliseconds
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
}
