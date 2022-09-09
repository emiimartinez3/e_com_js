import React from 'react'
import "./Contacto.css"
import Loader from './Loader';
import Mensaje from './Mensaje';
import { useForm } from './useForm'

const initialForm = {
    name:'',
    email:'',
    subject:'',
    comments:''
};

const validationsForms = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido"
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto ";
    }

    if (!form.subject.trim()) {
        errors.subject = "El campo 'Asunto' es requerido"
    }

    if (!form.comments.trim()) {
        errors.comments = "El campo 'Comentarios' es requerido"
    } else if (!regexComments.test(form.comments.trim())) {
        errors.comments = "El campo 'Comentarios' solo acepta 255 caracteres";
    }


    return errors;
};

let style = {
    color: "#dc3545"
}

function Contacto() {

    const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
    } = useForm(initialForm, validationsForms)

  return (
    <div className='contenedor'>
        <h1>Contactenos</h1>

        <div className='contenido'>

            <div className='img-contacto'>
                 <img src='/Multimedia/x__men__dos.jpg' className='img-form'></img>
            </div>

            <form className='formulario' onSubmit={handleSubmit}>
                <input 
                className='saok'
                type='text'
                name='name' 
                placeholder='Escribe tu nombre' 
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name} 
                required
                />

                {errors.name && <p style={style}>{errors.name}</p>}

                <input 
                className='saok'
                type='email'
                name='email' 
                placeholder='Escribe tu email' 
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email} 
                required
                />

                {errors.email && <p style={style}>{errors.email}</p>}

                <input 
                className='saok'
                type='text'
                name='subject' 
                placeholder='Asunto' 
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.subject} 
                required
                />

                {errors.subject && <p style={style}>{errors.subject}</p>}

                <textarea
                name='comments' 
                cols='50'
                rows='5'
                placeholder='Escribe tus comentarios' 
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.comments} 
                required
                ></textarea>

                {errors.comments && <p style={style}>{errors.comments}</p>}

                <input type='submit' value='Enviar' className='enviar'/>

            </form>

            {loading && <Loader/> }
            {response && (<Mensaje msg = "Los datos han sido enviados"/>)}
        </div>

    </div>
  )
}

export default Contacto