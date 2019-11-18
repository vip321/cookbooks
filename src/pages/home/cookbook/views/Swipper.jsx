import React from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile';
import { SwipperWrap } from './styledcookbook'
import { asyncLoadData } from '../actionCreator'

const mapState = (state) => {
    return {
        list: state.cookbook.list
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadData() {
            dispatch(asyncLoadData())
        }
    }
}


class Swipper extends React.Component {
    async componentDidMount() {
        this.props.loadData()
    }

    render() {
        return (
            <SwipperWrap>
                {
                    this.props.list.length > 0 &&
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {
                            this.props.list.slice(0, 5).map((value) => {
                                return <img key={value.id} src={value.img} alt={value.name} />
                            })
                        }
                    </Carousel>
                }
            </SwipperWrap>
        )
    }
}

export default connect(mapState, mapDispatch)(Swipper)
