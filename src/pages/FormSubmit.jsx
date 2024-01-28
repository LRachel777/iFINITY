import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const FormSubmit  = () => {
    const { register, handleSubmit } = useForm() 
  
    const onSubmit = (data) => {
      console.log(data)
    }
  
    return (

    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16 justify-center'> 
      <h2>SUBMIT NEEDED DOCX/ FORMS HERE</h2>  

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('test', { required: true })} />
        <button mt-20 ml-20>Submit</button>
        <p> Upload your document here </p>
      </form>

      <div align="justify-center mt-20">
        <button><Link to='/'>Return HOME Page</Link></button>
      </div>
    </div> 

    )
  }

  export default FormSubmit;