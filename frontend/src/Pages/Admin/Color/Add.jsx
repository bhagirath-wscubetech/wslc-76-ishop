import React, { useContext, useRef } from 'react'
import { MainContext } from '../../../Context/ContextHolder';
import { addColor } from '../../../Apis/color';

export default function Add() {
  const { notify } = useContext(MainContext)

  const submitForm = (event) => {
    event.preventDefault();
    const formData = {
      "name": event.target.color_name.value,
      "color": event.target.color.value
    }
    addColor(formData)
      .then(
        (success) => {
          notify(success.data.msg, success.data.status);
          if (success.data.status == 1) event.target.reset();
        }
      )
      .catch(
        (error) => {
          notify(error.data.msg, error.data.status);
        }
      )
  }
  return (
    <div className='container mt-5'>
      <div className="card p-2 rounded-1">
        <div className='card-heading h4 ps-2 mb-0'>
          Add Color
        </div>
        <hr />
        <div className="card-body">
          <form action="" onSubmit={submitForm} encType='multipart/form-data'>
            <div className="row">
              <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">Color Name</label>
                <input type="text" name="color_name" className="form-control" placeholder="Color name" />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">Color</label>
                <input type="color" name="color" className="form-control" />
              </div>
              <div>
                <button className='btn btn-primary'>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
