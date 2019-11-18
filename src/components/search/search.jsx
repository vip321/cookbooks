import React from 'react'
import border from '../styled/border'
import { SearchWrap, SearchInnerWrap } from './styledsearch'
import searchImg from 'assets/images/search.png'

class Search extends React.Component {
    stateDefaut = {
        borderBox: true,
        backgroundColor: "#f00"
    }
    render() {
        let Wrap = this.props.borderBox ? border({ comp: SearchInnerWrap }) : SearchInnerWrap;
        return (
            <SearchWrap>
                <Wrap  {...this.props}>
                    <img src={searchImg} alt="" />
                    <span>想吃什么点这里，如川菜</span>
                </Wrap>
            </SearchWrap>
        )
    }
}

export default Search