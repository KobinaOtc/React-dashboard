import React from 'react'
import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';


export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                            src="https://images.pexels.com/photos/10415754/pexels-photo-10415754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                            alt="" 
                            className="useShowImg" 
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Snow bell</span>
                            <span className="userShowUserTitle">Hacker</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account details</span>
                        <div className="useShowInfo">
                            <PermIdentityIcon className="userShowIcon" />
                            <span className="userShowInputTitle">SnowBella21</span>
                        </div>
                        <div className="useShowInfo">
                            <CalendarTodayIcon className="userShowIcon" />
                            <span className="userShowInputTitle">12/4/2000</span>
                        </div>
                        <span className="userShowTitle">Contact details</span>
                        <div className="useShowInfo">
                            <PhoneAndroidIcon className="userShowIcon" />
                            <span className="userShowInputTitle">+233 25 7474 6574</span>
                        </div>
                        <div className="useShowInfo">
                            <MailOutlineIcon className="userShowIcon" />
                            <span className="userShowInputTitle">SnowBella21@email.com</span>
                        </div>
                        <div className="useShowInfo">
                            <LocationSearchingIcon className="userShowIcon" />
                            <span className="userShowInputTitle">Accra | Ghana</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="SnowBella21" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Snow bell" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="SnowBella21@email.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input type="text" placeholder="+233 25 7474 6574" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Accra | Ghana" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdatesUploads">
                                <img
                                 src="https://images.pexels.com/photos/10415754/pexels-photo-10415754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                 alt=""
                                 className="userUpdateImg" 
                                />
                                <label htmlFor="file"><PublishIcon className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
