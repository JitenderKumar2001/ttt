import React from 'react'
import PostsSection from './PostsSection';
import { IoDiamondOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { CiHeart } from "react-icons/ci";
import profileData from './profileData.json';

function Profile() {
  const { name, backgroundPic, profilePic, followers, following, position, website, socialStats} = profileData;
  return (
    <div>
        <header>
            <div className="ttt">
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} width="50px" height="40px" alt='logo error' />
                </div>
                <div className="title">STORIES</div>
            </div>
            
            <div className="courses">Courses</div>
        </header>
        <div className="bg">
          <img src={backgroundPic} alt='bg img error' />
        </div>
        <div className="about">
          <div className="top">
            <div className="img">
              <img src={profilePic} alt='img error' />
            </div>
            <div className="name">
              <div className="name-top">
                <h3>{name}</h3>
                <i ><IoDiamondOutline style={{backgroundColor: 'navy', color: 'white', padding: '3px', borderRadius: '50%',fontSize: '2.5vw'}} /></i>
                <i><FaCheck style={{backgroundColor: 'lightgreen', color: 'white', padding: '3px', borderRadius: '50%',fontSize: '2.5vw'}} /></i>
              </div>

              <div className="name-bottom">
                <div>
                  <h2>{followers}</h2>
                  <h3>Followers</h3>
                </div>
                <div>
                  <h2>{following}</h2>
                  <h3>Following</h3>
                </div>
              </div>

            </div>
          </div>
          <div className="bottom">
            <h2>{position}</h2>
            <a href='https://google.com' target='blank'>{website}</a>
            <div className="reach">
              <div className="star">
                <i><CiStar style={{color: 'white', backgroundColor: 'skyblue', padding: '3px', fontSize: '1rem', borderRadius: '50%'}} /></i>
                <p>{socialStats.star}</p>
              </div>
              <div className="star">
                <i><AiOutlineLike style={{color: 'white', backgroundColor: '#f5aa42', padding: '3px', fontSize: '1rem', borderRadius: '50%'}} /></i>
                <p>{socialStats.like}</p>
              </div>
              <div className="star">
                <i><ImEye style={{color: 'white', backgroundColor: 'gray', padding: '3px', fontSize: '1rem', borderRadius: '50%'}} /></i>
                <p>{socialStats.seen}</p>
              </div>
              <div className="star">
                <i><CiHeart style={{color: 'white', backgroundColor: 'red', padding: '3px', fontSize: '1rem', borderRadius: '50%'}} /></i>
                <p>{socialStats.heart}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="post-count">
          <div className="demo">
            105 Posts 
          </div>
          <PostsSection />
        </div>
    </div>
  )
}

export default Profile