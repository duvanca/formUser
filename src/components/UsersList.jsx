import axios from 'axios'
import '../App.css'
import React, { useState, useEffect } from 'react';
import CardUser from './CardUser';
import FormUser from './FormUser';
import { useForm } from 'react-hook-form';
import Loader from './Loader';



function UsersList() {
  const [usersDates, setUsesDates] = useState()
  const [isShowForm, setItShowForm] = useState(false)
  const [update, setUpdate] = useState()
  const { register, handleSubmit, reset } = useForm();
  const [loader, setLoader] = useState(true)

  const URL = "https://users-crud1.herokuapp.com/users/"

  //-----> get---axios
  const dateuser = () => {
    axios.get(URL)
      .then(res => {
        setUsesDates(res.data)
        setLoader(false)
      })
      .catch(err => console.log(err))
  }
  console.log(usersDates)

  useEffect(() => {

    dateuser()

  }, [])

  //post ---> axios 

  const newUser = newuser => {

    axios.post(URL, newuser)
      .then(res => {
        console.log(res.data)
        dateuser()
      })
      .catch(err => console.log(err))


  }

  //axios--->patch 
  const patchUser = (id, patchUsers) => {
    axios.patch(`${URL}${id}/`, patchUsers)
      .then(res => {
        console.log(res.data)
        dateuser()
        setUpdate()
        setItShowForm(false)
      })
      .catch(err => console.log(err))
  }

  const showForm = () => {
    const obj = {
      birthday: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      id: ""
    }
    reset(obj)
    setItShowForm(!isShowForm)
  }



  return (
    <div>
      <header className="container__btn">
        <button className="btn__user" onClick={showForm}>{isShowForm ? "Cerrar Formulario" : "Nuevo Usuario"}<i className='bx bxs-user'></i></button>
      </header>

      {loader ? <Loader /> :
        <div className="form_">
          <div className="container">
            <div className="container__form">
              {

                isShowForm && <FormUser
                  newUser={newUser}
                  setUpdate={setUpdate}
                  patchUser={patchUser}
                  update={update}
                  reset={reset}
                  handleSubmit={handleSubmit}
                  register={register}
                  showForm={showForm}
                  setItShowForm={setItShowForm}

                />

              }
            </div>

            <div className="container__cards">

              {
                usersDates?.map(userDate => (
                  <CardUser
                    userDate={userDate}
                    key={userDate.id}
                    URL={URL}
                    dateuser={dateuser}
                    showForm={showForm}
                    setUpdate={setUpdate}
                    reset={reset}
                    setItShowForm={setItShowForm}
                    isShowForm={isShowForm}
                  />

                )
                )
              }
            </div>
          </div>

        </div>
      }
    </div>
  )
}

export default UsersList
