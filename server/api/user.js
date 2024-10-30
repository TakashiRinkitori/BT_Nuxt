import { defineEventHandler } from 'h3';
import userMiddleware from '../middleware/user-middleware';

export default defineEventHandler(async (event) => {
  return await userMiddleware(event);
});
