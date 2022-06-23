import styled from "styled-components"

const WrapperControls = styled.section`
    flex: 1 1 15vh;
`

export default function Controls() {
    return (
        <WrapperControls>
            <button>Laps</button>
            <button>Start</button>
        </WrapperControls>
    )
}