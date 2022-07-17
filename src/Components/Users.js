import React, { useContext, useEffect } from 'react'
import UserContext from '../Context/UserContext'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import User from './User/User'
import {useNavigate} from 'react-router-dom'
import SkeletonLoader from '../UI/SkeletonLoader';
const TOTAL_RESULTS = 5000;
const Users = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { users, loading, fetchData, fetchMoreData,login } = context;
  useEffect(() => {
    if(login === true)
      fetchData();
    else{
      navigate('/login');
    }
  }, [])

  const usersList = users.map((user, index) => {
    return (
      
      <div key={index} className="d-flex flex-row flex-wrap mx-2">
        
          <User
            name={user.name.first + " " + user.name.last}
            src={user.picture.thumbnail} />
        
      </div>
    )

  })
  const clickHandler = () => {
    fetchMoreData();
  }
  return (
    <>
    
    <div className="mt-4">
      {loading && <SkeletonLoader/>}
      <InfiniteScroll
        dataLength={users.length}
        next={clickHandler}
        hasMore={users.length !== TOTAL_RESULTS}
        loader={<SkeletonLoader/>}
      >
        
          <div className="d-flex flex-wrap justify-content-around"  >
            {usersList}
          </div>
        
      </InfiniteScroll>
    </div>
    </>
  )
}

export default Users