import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import Search from './Search'

function Banner() {
    const [showSearch,setShowSearch] = useState(false)
    return (
        <div className="banner">
            <div className ="banner_search">
            {showSearch && <Search />}

                <Button onClick={()=>setShowSearch(!showSearch)}
                variant='outlined' className="banner_searchButton">{showSearch ? 'hide' : 'Search Dates' }</Button>
            </div>
            <div className="banner_info">
                <h1>This is the life style which makes your future better</h1>
                <h5>You can by a house but not a home airbnb help you to find a Home ! </h5>
                <Button variant ='outlined'>Explore more</Button>
            </div>
            
        </div>
    )
}

export default Banner
