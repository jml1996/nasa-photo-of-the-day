import React, { useState, useEffect } from 'react'
import styled from "styled-components";

export default function Title(props) {
    const { title, date } = props;

    function reformatDate(dateString) {
        const year = parseInt(dateString.slice(0, 4));
        const month = parseInt(dateString.slice(5, 7));
        const day = parseInt(dateString.slice(8, 10));
        const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthAsWord = monthsArray[month-1];
        const out = `${monthAsWord} ${day}, ${year}`;
        return out;
    }

    return (
        <div>
            <StyledDiv>
                NASA Astronomy Photo of the Day for {reformatDate(date)}.
            </StyledDiv>
            <h1>
                {title}
            </h1>
        </div>
    )
}

const StyledDiv = styled.div`
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
`