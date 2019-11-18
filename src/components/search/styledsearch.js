import styled from 'styled-components'

const SearchInnerWrap = styled.div`
   height:100%;
   width:100%;
   display:flex;
   justify-content:center;
   align-items:center;
   background:${props => props.backgrond};
   img{
       width:.2rem;
       height:.2rem;
   }
   span{
       display:inline-block;
   } 
`

const SearchWrap = styled.div`
   height:.65rem;
   width:100%;
   background:white;
   padding: .1rem .15rem;
   display:flex;
   justify-content:center;
   align-items:center;
   `

export {
    SearchWrap,
    SearchInnerWrap
}