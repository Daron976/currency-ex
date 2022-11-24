/*eslint-disable*/
import { rest } from 'msw';

export const handlers = [
  // Handles a GET /user request
  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMeassage: 'Not Authorized',
        }),
      );
    }

    return res(
      ctx.status(300),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
];
