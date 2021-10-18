export const testRoute = {
    path: '/auth-api/test',
    method: 'get',
    handler: (req, res) => {
        res.status(200).send('It works!');
    },
};