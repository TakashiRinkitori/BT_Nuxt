// server/api/hello.j
let items = [
  { id: 1, name: 'Nguyễn Văn A' },
  { id: 2, name: 'Trần Thị B' },
  { id: 3, name: 'Lê Văn C' },
];

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  try {
    if (method === 'GET') {
      return items;
    }

    if (method === 'POST') {
      const newItem = await readBody(event);
      if (!newItem.name || !newItem.age || !newItem.phone) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Name, age, and phone are required' }));
      }
      newItem.id = items.length + 1; 
      items.push(newItem);
      return newItem;
    }

    if (method === 'PUT') {
      const updatedItem = await readBody(event);
      const index = items.findIndex(item => item.id === updatedItem.id);
      if (index === -1) {
        return sendError(event, createError({ statusCode: 404, statusMessage: 'Item not found' }));
      }
      items[index] = {
        ...items[index],
        ...updatedItem,
      };
      return items[index];
    }

    if (method === 'DELETE') {
      const { id } = await readBody(event);
      const index = items.findIndex(item => item.id === id);
      if (index === -1) {
        return sendError(event, createError({ statusCode: 404, statusMessage: 'Item not found' }));
      }
      items.splice(index, 1);
      return { success: true };
    }

    return sendError(event, createError({ statusCode: 405, statusMessage: 'Method Not Allowed' }));
  } catch (error) {
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Internal Server Error' }));
  }
});
