import { RequestHandler } from 'express';

export type ReqHandlerU<
  ResData = undefined,
  ReqBody = unknown,
  ReqQuery = EmptyObject
> = RequestHandler<
  any,
  { message: string; data?: ResData } | Buffer,
  ReqBody,
  ReqQuery
>;

export type EmptyObject = Record<string, never>;
