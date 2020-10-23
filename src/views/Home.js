import React from 'react';
import styled from "styled-components";
import { Row, Col, Divider } from 'antd';

const Wrapper = styled.div`
    padding: 50px 200px 50px 200px;
`;

const TitlePage = styled.div`
    text-align: center;
`;

const AntCol = styled(Col)`
    text-align: center;
`;

function Home() {

    return (
        <Wrapper>
            <TitlePage>Your Avatar</TitlePage>
            <Row justify="space-around">
                <AntCol span={12}>col-4</AntCol>
                <AntCol span={12}>col-4</AntCol>
            </Row>
            <Row justify="space-around">
                <AntCol span={3}>col-4</AntCol>
                <AntCol span={3}>col-4</AntCol>
                <AntCol span={3}>col-4</AntCol>
                <AntCol span={3}>col-4</AntCol>
            </Row>
            <Row justify="space-around">
                <AntCol span={3}>col-4</AntCol>
                <AntCol span={3}>col-4</AntCol>
                <AntCol span={3}>col-4</AntCol>
                <AntCol span={3}>col-4</AntCol>
            </Row>
            <Row justify="space-around">
                <AntCol span={12}>col-4</AntCol>
            </Row>
            <Row justify="space-around">
                <AntCol span={3}>col-4</AntCol>
                <AntCol span={3}>col-4</AntCol>
                <AntCol span={3}>col-4</AntCol>
                <AntCol span={3}>col-4</AntCol>
            </Row>
            <Row justify="space-around">
                <AntCol span={12}>col-4</AntCol>
            </Row>
        </Wrapper>
    )
}
export default Home;