import styled from "styled-components"

const WrapperControls = styled.section`
    flex: 1 1 15vh;
    width: 375px;
    display: flex;
    justify-content: space-around;
`

const Button = styled.button`
    & {
        height: 5rem;
        width: 5rem;
        border-radius: 100%;
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