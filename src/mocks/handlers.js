import { rest } from "msw"

const baseUrl = 'https://drf-api-carl.herokuapp.com/'

export const handlers = [
    rest.get(`${baseUrl}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(ctx.json({
            "pk": 9,
            "username": "anon",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 9,
            "profile_image": "https://res.cloudinary.com/ddkb2afxq/image/upload/v1/media/../default_profile_x9b7dl"
        })
        )
    }),
    rest.post(`${baseUrl}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    })
]