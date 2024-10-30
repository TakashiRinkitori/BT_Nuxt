import { eventHandler } from 'h3';

export default eventHandler((event) => {
  const { method, url } = event.node.req;
  console.log(`[${new Date().toISOString()}] ${method} ${url}`);
});
