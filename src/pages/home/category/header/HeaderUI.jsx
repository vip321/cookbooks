import React from 'react'

import { HeaderWrap, SlideWrap } from './HeaderStyled'


export default function HeaderUI(props) {
    return (
        <HeaderWrap>
            <SlideWrap radius={12}>
                <li
                    className={props.type === 'category' ? 'active' : ''}
                    onClick={() => props.onWitch("category")}>分类</li>
                <li
                    className={props.type === 'material' ? 'active' : ''}
                    onClick={() => props.onWitch("material")}>食材</li>
                <li
                    className={props.type === 'category' ? '' : 'right'}
                ></li>
            </SlideWrap>
        </HeaderWrap >
    )

}