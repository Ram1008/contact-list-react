import React,{ useState} from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(10);
    const [login, setLogin] = useState(false);

    const fetchData = async () => {
        let url = `https://randomuser.me/api/?page=${page}&results=30`;
        setLoading(true);
        let data = await fetch(url);
        const parsedData = await data.json();
        setUsers(parsedData.results);
        setLoading(false);
    };
    const fetchMoreData = async () => {
      
        setPage(page + 1);
        let url = `https://randomuser.me/api/?page=${page}&results=30`;
        const data = await fetch(url);
        const parsedData = await data.json();
        const timeout =  setTimeout(()=>{ 
        setUsers(users.concat(parsedData.results));
        setLoading(false);
        setTotalResults(totalResults + 10);
      },1000)
        
    };
    const loginHandler = () =>{
      setLogin(true);
    }
    const logoutHandler = () =>{
      setLogin(false);
    }
  return (
    <UserContext.Provider value = {{users, loading, fetchData, fetchMoreData, totalResults, login,loginHandler, logoutHandler}}>
    {props.children}
    </UserContext.Provider>
  )
}

export default UserState;
