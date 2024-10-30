let posts = [];

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const url = event.node.req.url;

  if (!url.startsWith('/api/posts')) {
    return;
  }

  if (method === 'GET') {
    if (url.includes('/api/posts/')) {
      const id = parseInt(url.split('/').pop());
      const post = posts.find(p => p.id === id);
      return post || sendError(event, createError({ statusCode: 404, statusMessage: 'Post not found' }));
    }
    return posts; 
  }

  if (method === 'POST') {
    const newPost = await readBody(event);
    newPost.id = posts.length + 1; 
    posts.push(newPost);
    return newPost;
  }

  if (method === 'DELETE') {
    const id = parseInt(url.split('/').pop());
    posts = posts.filter(post => post.id !== id); 
    return { success: true }
  }

  return sendError(event, createError({ statusCode: 405, statusMessage: 'Method Not Allowed' }));
});
