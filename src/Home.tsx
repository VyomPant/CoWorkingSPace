import React from 'react'
import Search from './Components/Hero/Search';
import Popular from './Components/Popular/Popular';
import SpaceType from './Components/SpaceType/SpaceType';

const Home = () => {
    return(
        <div>
            <Search />
            <SpaceType />
            <Popular />
        </div>
    )
}

export default Home;