import React, { useState } from 'react';
import SetProfile from '../components/SetProfile';
import ShowAvatar from '../components/ShowAvatar';

function Home() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [step, setStep] = useState(1);

    const StepComponent = () => {
        if (step === 2) {
            return <ShowAvatar birthMonth={birthMonth} birthDay={birthDay} gender={gender} />
        } else {
            return <SetProfile setStep={setStep} setName={setName}
                gender={gender} setGender={setGender}
                setBirthDay={setBirthDay}
                birthMonth={birthMonth} setBirthMonth={setBirthMonth} />
        }
    }

    return (
        <>
            <>{StepComponent()}</>
        </>
    )
}
export default Home;