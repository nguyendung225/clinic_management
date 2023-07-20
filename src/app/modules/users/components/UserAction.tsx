import { FC, useContext } from 'react';
import { User } from '../models/UserModels';
import { UserContext } from './UserContext';
import './user.scss'
type Props = {
  data:User
}
export const UserAction: FC <Props> =(props) => {
  const { data } = props
  const { handleEditUser, handleDeleteUser } = useContext(UserContext);
  return (
    <div className='min-w-30px text-center'>
      <i className="fa-solid fa-pen text-primary me-5 icon-hover" onClick={()=>{handleEditUser(data)}}></i>
      <i className="fa-solid fa-trash text-danger icon-hover" onClick={() => { handleDeleteUser(data); }}></i>
    </div>
  );
};
