import React from 'react'
import axios from 'axios'

const CardUser = ({ userDate, dateuser, URL, reset, setItShowForm, setUpdate, isShowForm,showForm }) => {

    //axios----> delet
    const deletUser = id => {

        axios.delete(`${URL}${id}/`)
            .then(res => {
                console.log(res.data)
                dateuser()
            })
            .catch(err => console.log(err))
    }

    const update = () => {
        // showForm() 
        const obj = {
            birthday: userDate.birthday,
            email: userDate.email,
            first_name: userDate.first_name,
            last_name: userDate.last_name,
            password: userDate.password
            
            
        }
        reset(obj)
     setItShowForm(!isShowForm)
        
        setUpdate(userDate)
        
    }


    return (
        <article className="card">
            <header className="head">
                <button className="delete"onClick={() => deletUser(userDate.id)}>X</button>
                <button onClick={update}><i class='bx bx-edit-alt'></i></button>
            </header>
            <div className="card__dates">
                <p><i class='bx bxs-user'></i>{userDate.first_name} {userDate.last_name}</p>
                <p><i class='bx bxs-envelope'></i>{userDate.email}</p>
                <p><i class='bx bxs-cake'></i>{userDate.birthday}</p>
            </div>

        </article>
    )
}

export default CardUser