import styled from "styled-components"

const WrapperLapsList = styled.div`
    overflow: scroll;
    border-top: white 0.5px solid;
    width: 350px;
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ElementLi = styled.div`
    flex: 0 0 30px;
    width: 350px;
    border-bottom: white 0.5px solid;
`

export default function LapsList() {
    return (
        <WrapperLapsList>
            <ElementLi>haha</ElementLi>
            <ElementLi>haha</ElementLi>
            <ElementLi>haha</ElementLi>
            <ElementLi>haha</ElementLi>
            <ElementLi>haha</ElementLi>
            <ElementLi>haha</ElementLi>
            <ElementLi>haha</ElementLi>
            <ElementLi>haha</ElementLi>
        </WrapperLapsList>
    )
}