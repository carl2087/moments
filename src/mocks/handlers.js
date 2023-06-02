import { rest } from 'msw';

const baseURL = 'https://drf-api-carl.herokuapp.com/';

export const handlers = [

    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),

    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(
            ctx.json({
            pk: 3,
            username: "carl1",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 3,
            profile_image: "https://res.cloudinary.com/ddkb2afxq/image/upload/v1/media/images/carl_running_2_a4touh",
        }),
        );
    }),

]