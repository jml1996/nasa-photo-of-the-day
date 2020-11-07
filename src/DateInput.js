import React, { useState, useEffect } from 'react'
import styled from "styled-components";

export default function DateInput(props) {
    // const { title } = props;
    const { dateOnEnterKey } = props;
    console.log(dateOnEnterKey);
    return (
        <InputDiv>
            <form>
                <InputStyle
                type="text"
                placeholder="Enter date formated as YYYY-MM-DD"
                onKeyDown={(evt) => dateOnEnterKey(evt)}
                />
            </form>
        </InputDiv>
    )
}

const InputDiv = styled.div`
    justify-content: center;
    text-align: center;
    margin-top: 1%;
`

const InputStyle = styled.input`
    width: 246px;
    text-align: center;
`

