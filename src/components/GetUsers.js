import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";




const GetUsers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


    

    useEffect(() => {
        setLoading(true)
        const showUSers = async () => {
            const res = await fetch('https://randomuser.me/api/');
            const data = await res.json();
            setUsers(data.results)
           

            setLoading(false)
        }
        
        showUSers()
    },[])

    const getPages = async (currentPage) => {
        const res = await fetch(`https://randomuser.me/api/?page=${currentPage}`);
        const data = await res.json();
        return data.results
    }


    const handlePageClick = async (data) => {
        

        let currentPage = data.selected + 1

        const usersFromApi = await getPages(currentPage)
        setUsers(usersFromApi)
    }
    return(
        <div className="user-page">
            <div className="home-list">
            <ul className="fix-list">
                <li><NavLink style={({isActive}) => isActive ? {color: 'white'} : {color: 'red'}}
                     to="/">Home</NavLink>
                </li>
                <li>
                     <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: 'white'}}
                     to="/users">Users</NavLink>
                </li>
                <li>
                      <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: 'white'}}
                      to="/about">About</NavLink>
                </li>
            </ul>
        </div>
            <section className="user-container">
                {users.map((users) => { 
                return  <div key={users.id} className="card">
                    <div className="card" style={{minHeight: 220}}> 
                        <div className="card-body">
                            <section className="image-card"> 
                            <img loading="lazy" src={users.picture.medium} className="img" alt="face profile" width="300px" height="300px"/>
                            </section>
                            <p className="card-text"></p>
                            <h6 className="card-names">Email: {users.email}</h6>
                            <h6 className="card-names">Name: {users.name.title} {users.name.first} {users.name.last}</h6>
                            <h6 className="card-names">Gender: {users.gender}</h6>
                            <h6 className="card-names">Phone: {users.phone}</h6>
                        </div>
                    </div>
                </div>
            })}   
            </section>

        
          
          <div className="paginate">
          <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={25}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
          />
          </div>

          <div className="footer">
            <ul className="footer-list">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Rules of Conduct</a></li>
                <li><a href="#">Advertise on Warzone Society</a></li>
            </ul>
        </div>


        </div>
        
    )
}

export default GetUsers;