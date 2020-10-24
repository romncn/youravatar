import React, { useState } from 'react';
import styled from "styled-components";
import {
    Form as AntForm,
    Input as AntInput,
    Button as AntButton,
    Select as AntSelect,
    Row, Col,
    Card
} from 'antd';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import SetProfile from '../components/SetProfile';
import ShowAvatar from '../components/ShowAvatar';

const TitlePage = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: #e66f0f;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
`;

function Home() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [step, setStep] = useState(1);

    const StepComponent = () => {
        if (step === 2) {
            return <ShowAvatar />
        } else {
            return <SetProfile setStep={setStep} />
        }
    }

    return (
        <>
            <TitlePage>Your Avatar</TitlePage>
            <>{StepComponent()}</>
        </>
    )
}
export default Home;