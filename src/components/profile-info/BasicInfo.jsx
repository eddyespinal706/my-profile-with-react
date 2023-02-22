import { useContext } from 'react'
import { BasicInfoContext } from '../context/BasicInfoContext'
import "./BasicInfo.css"

function BasicInfo() {

  const profilePicture = import.meta.env.VITE_PROFILE_PICTURE_URL

  const info = useContext(BasicInfoContext)

  return (
    <div className="profile-container">
      <div className="profile-basic-info">
        <div className="profile-picture">
          <img src={profilePicture} alt="Profile_Picture" />
        </div>
        <div className="basic-info">
          <p className="label">Name: <span className='info'>{info.name}</span></p>
          <p className="label">Birthday: <span className='info'>{info.birthday}</span></p>
          <p className="label">Occupation: <span className='info'>{info.occupation}</span></p><br />
        </div>
      </div>
    </div>
  )
}

export default BasicInfo