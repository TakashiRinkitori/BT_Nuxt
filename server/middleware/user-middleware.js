import { defineEventHandler, createError } from 'h3';

export default defineEventHandler(async (event) => {
  if (event.node.req.url !== '/api/user') {
    return; 
  }

  try {
    const response = await globalThis.fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: 'Error fetching user data',
      });
    }

    const data = await response.json();

    if (!data || !data.name) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found',
      });
    }

    const enhancedData = {
      ...data,
      additionalInfo: 'Thông tin bổ sung từ middleware',
    };

    return enhancedData;
  } catch (error) {
    console.error('Error in middleware:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
    });
  }
});
