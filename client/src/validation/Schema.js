import * as yup from 'yup'

export const ArtistValidation = yup.object().shape({
    title: yup.string().min(8, "title cant be less than 8").required("title REQUIRED"),
    desc: yup.string().max(500).required("REQUIRED"),
    likeCount:yup.number().integer().positive().required("genre REQUIRED"),
    commentCount:yup.number().integer().positive().required("genre REQUIRED"),
    img:yup.string().max(100,"URL can not be this much").required("ulr REQUIRED"),
})