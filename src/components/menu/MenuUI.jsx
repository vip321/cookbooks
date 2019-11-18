import React from 'react'
import { MenuWrap } from './MenuStyled'

export default function MenuUI(props) {
    //let resource = props.menu && (props.type === "category" ? props.menu.category : props.menu.material)
    return (
        <MenuWrap>
            <div>
                <ul>
                    {
                        props.tabs.map((value, index) => {
                            return (
                                <li
                                    key={value + index}
                                    className={value === props.tab ? 'active' : ''}
                                    onClick={() => props.onClickTab(value)}
                                ><span>{value}</span></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        props.contents.map((value, index) => {
                            return <li key={value + index}>{value}</li>
                        })
                    }
                </ul>
            </div>

        </MenuWrap>
    )
} 