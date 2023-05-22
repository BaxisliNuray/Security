import { TextField } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import Button from '@mui/material/Button';
import { ArtistValidation } from '../validation/Schema';

function AddEmployee() {
  const handleSubmit = (values, actions) => {
    console.log(values)
    actions.resetForm()
}
const formik = useFormik({
    initialValues: {
        name: '',
        age: '',
        genre: '',
        img: '',
        female: 'false',
        male: 'true'
    },
    validationSchema: ArtistValidation,
    onSubmit: handleSubmit
})

  
  return (
    <>
      <form onSubmit={formik.handleSubmit} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} >
        <TextField
          className={formik.errors.title && formik.touched.title ? "input-error" : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="title"
          value={formik.values.name}
          type='text' style={{ display: 'block' }} id="outlined-basic" label="Title" variant="outlined" /> <br />
        {(formik.errors.title && formik.touched.title) && <small style={{ color: "red" }}>{formik.errors.title}</small>}
        <TextField
          className={formik.errors.desc && formik.touched.desc ? "input-error" : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="desc"
          value={formik.values.desc}
          type='string' style={{ display: 'block' }} id="outlined-basic" label="desc" variant="outlined" /><br />
        {(formik.errors.desc && formik.touched.desc) && <small style={{ color: "red" }}>{formik.errors.desc}</small>}

        <TextField

          className={formik.errors.genre && formik.touched.genre ? "input-error" : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="genre"
          value={formik.values.genre}
          type='text' style={{ display: 'block' }} id="outlined-basic" label="genre" variant="outlined" /><br />
        {(formik.errors.genre && formik.touched.genre) && <small style={{ color: "red" }}>{formik.errors.genre}</small>}

        <TextField
          className={formik.errors.img && formik.touched.img ? "input-error" : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="img"
          value={formik.values.img}
          type='url' style={{ display: 'block' }} id="outlined-basic" label="Image" variant="outlined" /><br />
        {(formik.errors.img && formik.touched.img) && <small style={{ color: "red" }} >{formik.errors.img}</small>}

        <TextField
          className={formik.errors.likeCount && formik.touched.likeCount ? "input-error" : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="likeCount"
          value={formik.values.likeCount}
          type='number' style={{ display: 'block' }} id="outlined-basic" label="Like Count" variant="outlined" /><br />
        {(formik.errors.likeCount && formik.touched.likeCount) && <small style={{ color: "red" }} >{formik.errors.likeCount}</small>}

        <TextField
          className={formik.errors.commentCount && formik.touched.commentCount ? "input-error" : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="commentCount"
          value={formik.values.commentCount}
          type='number' style={{ display: 'block' }} id="outlined-basic" label="Comment Count" variant="outlined" /><br />
        {(formik.errors.commentCount && formik.touched.commentCount) && <small style={{ color: "red" }} >{formik.errors.commentCount}</small>}

        <Button size="small" disabled={Object.keys(formik.errors).length > 0} style={{ color: 'blue', display: 'flex', justifyContent: 'start' }}>Add</Button>




      </form>
    </>
  )
}

export default AddEmployee