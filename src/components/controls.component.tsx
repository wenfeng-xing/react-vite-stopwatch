import styled from "styled-components"

const WrapperControls = styled.section`
    flex: 1 1 15%;
    width: 375px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftButton = styled.button`
    & {
        margin: 0 10px;
        height: 5rem;
        width: 5rem;
        border-radius: 100%;
        font-size: 1rem;
        outline: rgb(51, 51, 51) solid 2px;
        border: 3px solid black;
        background-color: rgb(51, 51, 51);
        color: rgb(240, 160, 80);
    }
    &:hover {
        background-color: rgb(81, 81, 81);
        width: 5.2rem;
        height: 5.2rem;
    }
    &:active {
        width: 4.8rem;
        height: 4.8rem;
        background-color: rgb(26, 26, 26);
    }
`

const RightButton = styled.button`
    & {
        margin: 0 10px;
        height: 5rem;
        width: 5rem;
        border-radius: 100%;
        font-size: 1rem;
        outline: rgb(49, 33, 7) solid 2px;
        border: 3px solid black;
        background-color: rgb(49, 33, 7);
        color: rgb(221, 87, 81);
    }
    &:hover {
        background-color: rgb(79, 63, 37);
        width: 5.2rem;
        height: 5.2rem;
    }
    &:active {
        width: 4.8rem;
        height: 4.8rem;
        background-color: rgb(25, 16, 4);
        color: rgb(221, 87, 81);
    }
`

export default function Controls() {
    return (
        <WrapperControls>
            <LeftButton>Laps</LeftButton>
            <RightButton>Start</RightButton>
        </WrapperControls>
    )
}