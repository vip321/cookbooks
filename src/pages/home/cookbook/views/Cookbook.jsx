import React from 'react'
import Header from './Header'
import Swipper from './Swipper'
import HotCategory from './HotCategory'
import Search from 'components/search/search'
import Top10 from './Top10'
export default class CookBook extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <Swipper></Swipper>
                <Search borderBox={true} borderColor="blue" width={'1px'} radius={6}></Search>
                <HotCategory></HotCategory>
                <Top10></Top10>
            </React.Fragment>
        )
    }
} 
