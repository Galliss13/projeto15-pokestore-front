import styled from "styled-components";
import { wine } from "../../constants/colors";

const Formdiv = styled.div`
    position: absolute;
    left: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 500px;
    padding: 20px;
    background-color: ${wine};
    border-radius: 20px;
    box-shadow: 10px 10px 15px black;

`
export default Formdiv