import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../header/HeaderContainer'
import Search from 'components/search/search.jsx'
import MenuContainer from '../../../../components/menu/MenuContainer'
import CateTransition from 'components/hoc/cateTransition'
import { CategoryWarp } from './CategoryStyled'

@CateTransition
class CategoryUI extends React.Component {
    render() {
        return (
            <CategoryWarp>
                <Header></Header>
                <Search
                    borderBox={true}
                    radius={6}
                    borderColor="#fff"
                    width={'1px'}
                    backgrond={'#eee'}
                ></Search>
                <div className="menu">
                    <Route
                        path="/index/category"
                        children={() => {
                            return <MenuContainer
                                type="category"></MenuContainer>
                        }}
                    ></Route>
                    <Route
                        path="/index/material"
                        children={() => {
                            return <MenuContainer
                                type="material"></MenuContainer>
                        }}
                    ></Route>
                </div>
            </CategoryWarp>
        )
    }
}

export default CategoryUI