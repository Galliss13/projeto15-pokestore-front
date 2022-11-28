import styled from "styled-components"

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImage src="https://www.pdvg.it/wp-content/uploads/2021/01/47c3d33d1314d221729e61459914c62a.jpg"/>
        </LogoContainer>
    )
};

const LogoContainer = styled.div`
    width: 100%;
    height: 100%;
`

const LogoImage = styled.img`
    width: 100%;
    height: 100%;
`

export {
    LogoContainer,
    LogoImage
}