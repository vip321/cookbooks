import React from 'react'
import MenuUI from './MenuUI'
import http from 'utils/http.js'
import cateTransition from '../hoc/cateTransition'

@cateTransition
class MenuContainer extends React.Component {
    state = {
        menu: null,
        // 不要试图用两个组件同时更新一个数据
        tab: '',
        initTab: this.props.type === 'category' ? '热门' : '肉类'
    }
    async componentDidMount() {
        let result = await http.get("/api/cate");
        this.setState({
            menu: result.data
        })
    }
    handleClickTab = (tab) => {
        this.setState({
            tab
        })
    }
    render() {
        let tab = this.state.tab || this.state.initTab
        let data = this.state.menu ? this.state.menu[this.props.type] : {}
        let tabs = Object.keys(data)
        let contents = data[tab] || []
        return (
            <MenuUI
                tab={tab}
                tabs={tabs}
                contents={contents}
                onClickTab={this.handleClickTab}
            ></MenuUI>
        )
    }
}
export default MenuContainer
