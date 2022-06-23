import styled from "styled-components"

const WrapperControls = styled.section`
    flex: 1 1 15%;
    width: 375px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    & {
        margin: 0 10px;
        height: 5rem;
        width: 5rem;
        border-radius: 100%;
        font-size: 1rem;
    }
    &:hover {
        background-color: yellow;
        width: 5.2rem;
        height: 5.2rem;
    }
    &:active {
        width: 4.8rem;
        height: 4.8rem;
    }
`

export default function Controls() {
    return (
        <WrapperControls>
            <Button>Laps</Button>
            <Button>Start</Button>
        </WrapperControls>
    )
}