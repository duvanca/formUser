import React from "react";

const FormUser = ({
  newUser,
  patchUser,
  update,
  handleSubmit,
  reset,
  register,
  setItShowForm,
}) => {
  const resetForm = {
    birthday: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    id: "",
  };

  const submit = (data) => {
    if (update !== undefined) {
      // showForm()
      patchUser(update.id, data);
    } else {
      newUser(data);
      reset(resetForm);
    }

    // setItShowForm(false)
  };

  return (


    <form className="form" onSubmit={handleSubmit(submit)}>
      <h2 className="title__form">Datos de Usuario</h2>
      <div className="container__form">

        <div className="form__group">
          <input type="text" id="firstname" {...register("first_name")} placeholder=" " className="form__input"/>
          <label className="form__label" htmlFor="firstname">nombre :</label>
          <span className="form__line"></span>
        </div>

        <div className="form__group">
          <input type="text" id="lastname" {...register("last_name")} placeholder=" " className="form__input"/>
          <label className="form__label" htmlFor="last_name">apellido :</label>
          <span className="form__line"></span>
        </div>

        <div className="form__group">
          <input type="text" id="email" {...register("email")} placeholder=" " className="form__input" />
          <label className="form__label"htmlFor="email">correo :</label>
          <span className="form__line"></span>
        </div>

        <div className="form__group">
          <input type="password" id="password" {...register("password")} placeholder=" "  className="form__input"/>
          <label className="form__label" htmlFor="password">contraseña :</label>
          <span className="form__line"></span>
        </div>

        
      </div>
     
     
      <div className="date">
          <label htmlFor="birthday">cumpleaños:</label>
          <input  type="date" id="birthday" {...register("birthday")} />
         
        </div>

        <button className="btn__submit">submit</button>
    </form>

  );
};

export default FormUser;
