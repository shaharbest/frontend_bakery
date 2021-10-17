import React from 'react'
import { Formik, Form } from 'formik'

function LogSignForm({
  title,
  children,
  initialValues,
  validationSchema,
  handleSubmitData,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true)
          console.log(data)
          handleSubmitData(data)
          setSubmitting(false)
        }}
      >
        {({ values, errors, isSubmitting, handleSubmit, isValid, touched }) => (
          <Form className="flex flex-col gap-1 w-56 mx-auto my-3 border p-1">
            {[
              ...children,
              <div className="flex justify-center">
                <button disabled={isSubmitting} type="submit" className="btn">
                  submit
                </button>
              </div>,
            ].map((curChild, index) => (
              <div key={index} className="bg-d2 border p-1">
                {curChild}
              </div>
            ))}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LogSignForm
