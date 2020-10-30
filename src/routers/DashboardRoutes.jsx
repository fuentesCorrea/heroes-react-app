import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DcScreem from '../component/dc/DcScreem'
import HeroesScreem from '../component/heroes/HeroesScreem'
import Marvel from '../component/marvel/Marvel'
import { Navbar } from '../component/ui/Navbar'

const DashboardRoutes = () => {
    return (
        <>

        <Navbar/>
        <div>
            <Switch>
                <Route exact path="/marvel" component={Marvel}/>
                <Route exact path="/heroe/:heroeid" component={ HeroesScreem }/>
                <Route exact path="/dc" component={ DcScreem }/>
                <Redirect to="/marvel"/>
            </Switch>
        </div>
            
        </>
    )
}

export default DashboardRoutes
