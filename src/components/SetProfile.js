import React, { useState, useEffect } from 'react';
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

const TitlePage = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: #e66f0f;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
`;

const Wrapper = styled.div`
    padding: 0px 200px 0px 200px;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1028px) {
        padding: 0px 75px 0px 75px;
    }
    @media (max-width: 600px) {
        padding: 0px 50px 0px 50px;
    }
`;

const PrimaryButton = styled(AntButton)`
    border-radius: 4px;
    font-size: 18px;
    font-weight: 500;
    background: #e66f0f;
    border: #e66f0f;
    &:hover , &:active, &:focus {
        background: #c25738;
        border: #c25738;
    }
`;

const InputComponent = styled(AntInput)`
    border-radius: 4px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    &:hover , &:active, &:focus {
        border-color: #e66f0f;
    }
`;

const AntCard = styled(Card)`
  border-radius: 8px;
  box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.06), 0px 3px 4px rgba(0, 0, 0, 0.07);
`;

const ContentCard = styled(AntCard)`
    margin: 0px 15px 50px 15px;
`;

const MaleCard = styled(AntCard)`
    margin: 10px 15px 10px 15px;
    padding: 10px 0px 10px 0px;
    font-size: 48px;
    color: #356BCA;
    &:hover , &:active, &:focus {
        background-color: #356BCA;
        color: #F7F7F7;
    }
    cursor: pointer;
`;

const MaleCardSelected = styled(MaleCard)`
    background-color: #356BCA;
    color: #F7F7F7;
`;

const FeMaleCard = styled(AntCard)`
    margin: 10px 15px 10px 15px;
    padding: 10px 0px 10px 0px;
    font-size: 48px;
    color: #F75277;
    &:hover , &:active, &:focus {
        background-color: #F75277;
        color: #F7F7F7;
    }
    cursor: pointer;
`;

const FeMaleCardSelected = styled(FeMaleCard)`
    background-color: #F75277;
    color: #F7F7F7;
`;

const MonthCard = styled(AntCard)`
    margin: 10px 20px 10px 20px;
    font-size: 18px;
    &:hover , &:active, &:focus{
        background-color: #e66f0f;
        color: #F7F7F7;
    }
    background-color: ${props => props.selected ? "#e66f0f" : "#f7f7f7"};
    color: ${props => props.selected ? "#f7f7f7" : "#e66f0f"};

    cursor: pointer;
`;

const AntCol = styled(Col)`
    text-align: center;
`;

function SetProfile(props) {
    const { Option } = AntSelect;
    const [dayOfMonth, setDayOfMonth] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        '31'])
    const [month, setMonth] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
    const [form] = AntForm.useForm();

    useEffect(() => {
        form.setFieldsValue({
            gender: props.gender,
            month: props.birthMonth,
        })
    }, [props.gender, props.birthMonth])

    const onFinish = values => {
        props.setName(values.name)
        props.setGender(props.gender)
        props.setBirthDay(values.day)
        props.setBirthMonth(props.birthMonth)
        props.setStep(2)
    };

    const onSelectGender = (gender) => {
        if (gender === 'male') {
            props.setGender('male')
        } else if (gender === 'female') {
            props.setGender('female')
        } else {
            props.setGender('none')
        }
    }

    return (
        <AntForm form={form} onFinish={onFinish}>
            <TitlePage>Your Avatar</TitlePage>
            <Wrapper>
                <ContentCard>
                    <AntForm.Item name="name" label="Name" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                        <InputComponent placeholder="Input your name" />
                    </AntForm.Item>
                    <AntForm.Item name="gender" label="Gender" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                        <Row justify="space-around" gutter={18}>
                            <AntCol span={12}>
                                {props.gender === 'male' ?
                                    <MaleCardSelected onClick={() => onSelectGender('male')}>
                                        <ManOutlined /> Male
                                    </MaleCardSelected>
                                    :
                                    <MaleCard onClick={() => onSelectGender('male')}>
                                        <ManOutlined /> Male
                                    </MaleCard>
                                }
                            </AntCol>
                            <AntCol span={12}>
                                {props.gender === 'female' ?
                                    <FeMaleCardSelected onClick={() => onSelectGender('female')} >
                                        <WomanOutlined /> Female
                                    </FeMaleCardSelected>
                                    :
                                    <FeMaleCard onClick={() => onSelectGender('female')} >
                                        <WomanOutlined /> Female
                                    </FeMaleCard>
                                }
                            </AntCol>
                        </Row>
                    </AntForm.Item>
                    <AntForm.Item name="day" label="BirthDay" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                        <AntSelect
                            placeholder="Please select your birthday"
                        >
                            {dayOfMonth.map((day) => {
                                return (
                                    <Option value={day}>{day}</Option>
                                )
                            })}
                        </AntSelect>
                    </AntForm.Item>
                    <AntForm.Item name="month" label="BirthMonth" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                        <Row justify="space-around">
                            {month.map((month) => {
                                return (
                                    <AntCol lg={6} md={8} sm={24} xs={24}>
                                        <MonthCard selected={month === props.birthMonth} onClick={() => props.setBirthMonth(month)} >
                                            {month}
                                        </MonthCard>
                                    </AntCol>
                                )
                            })}
                        </Row>
                    </AntForm.Item>
                </ContentCard>
                <AntForm.Item>
                    <PrimaryButton type="primary" size={"large"} block htmlType="submit">FINISH!</PrimaryButton>
                </AntForm.Item>
            </Wrapper>
        </AntForm>
    )
}
export default SetProfile;