import React from 'react'
import { ListWrap, ListItem, H3Wrap } from './ListStyled'
import { NavBar, Icon} from 'antd-mobile'
import http from 'utils/http'


class List extends React.Component {
    constructor(props) {
        super(props)
        this.page = 0
        this.limit = 10
    }

    state = {
        list: []
    }

    async componentDidMount() {
        let result = await http.get(`/list/data?_page=${this.page}&_limit=${this.limit}`)
        this.setState((state) => {
            return {
                list: [
                    ...state.list,
                    ...result
                ]
            }
        })
    }

    render() {
        return (
            <ListWrap>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{this.props.location.state.text}</NavBar>

                <ul className="list">
                    {
                        this.state.list.map((value, index) => {
                            return (
                                <ListItem key={value.id + index}>
                                    <div>
                                        <img style={{ width: '1.15rem', height: '.75rem' }} src={value.img} alt="" />
                                    </div>
                                    <div>
                                        <h2>{value.name}</h2>
                                        <H3Wrap>{value.burdens}</H3Wrap>
                                        <h4>{value.all_click}浏览 {value.favorites}收藏</h4>
                                    </div>
                                </ListItem>
                            )
                        })
                    }
                </ul>
            </ListWrap>

        )
    }
}

export default List