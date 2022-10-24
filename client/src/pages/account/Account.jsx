import React, { useContext, useEffect, useState } from 'react';
import FormInput from '../../components/forms/FormInput';
import Nav from '../../components/nav/Nav';
import { UserContext } from '../../context/UserContext';
import { profileFormState } from '../../utils/UserData';
import './style.css';

function Account() {
  const { user, setUser } = useContext(UserContext);
  const [formKeys, setFormKeys] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const profile = user.profile;

  useEffect(() => {
    if (isUpdating) {
      setFormKeys(profileFormState);
    } else {
      setFormKeys([]);
    }
  }, [isUpdating]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('name', name, value);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log('submited');


  }

  const setUpdating = () => {
    setIsUpdating(!isUpdating);
  };

  return (
    <>
      <Nav />
      <main className='account__container'>
        <div className='account__header__container'>
          <h2>Account</h2>
        </div>

        {!isUpdating && (
          <article className='account__profile__container'>
            <div className='profile__image__container'>
              <img src={user.profile.profileImgUrl} alt={user.username} />
            </div>

            <div className='profile__data__container'>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.profile.firstname}</p>
              <p>{user.profile.lastname}</p>
              <p>{user.profile.betHistory} = [ ]</p>
              <p>£ {user.profile.bank}</p>
            </div>

            <button onClick={setUpdating}>Update</button>
          </article>
        )}
        {formKeys.length > 0 && (
          <article className='account__profile__container'>
            <button onClick={setUpdating}>X</button>
            <ul>
              {formKeys.map((key, index) => (
                <li key={index}>
                  <FormInput name={key} handleChange={handleChange} />
                </li>
              ))}
              <button onClick={handleUpdate}>Update</button>
            </ul>
          </article>
        )}
      </main>

      <section>test</section>
    </>
  );
}

export default Account;
