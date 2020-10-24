import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {
    Row, Col,
    Card
} from 'antd';

const TitlePage = styled.div`
    font-size: 48px;
    font-weight: bold;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
`;

const Wrapper = styled.div`
    margin-bottom: 30px;
`;

const AntCard = styled(Card)`
    border-radius: 8px;
    box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.06), 0px 3px 4px rgba(0, 0, 0, 0.07);
    margin: 10px 15px 10px 15px;
`;

const SeasonCover = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    padding: 10px 0px 10px 0px;
`;

const AvatarCard = styled(AntCard)`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    padding: auto;
`;

const AvatarImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-size: cover;
`;

function ShowAvatar(props) {
    const [season, setSeason] = useState("");
    const [avatar, setAvatar] = useState("/img/season/winter.jpg");

    useEffect(() => {
        if (props.birthDay <= 20) {
            switch (props.birthMonth) {
                case 'Dec':
                case 'Jan':
                case 'Feb':
                case 'Mar':
                    return setSeason("/img/season/winter.jpg");
                case 'Mar':
                case 'Apr':
                case 'May':
                case 'Jun':
                    return setSeason("/img/season/spring.jpg");
                case 'Jun':
                case 'Jul':
                case 'Aug':
                case 'Sep':
                    return setSeason("/img/season/summer.jpg");
                case 'Sep':
                case 'Oct':
                case 'Nov':
                case 'Dec':
                    return setSeason("/img/season/autumn.jpg");
                default:
                    return setSeason("/img/season/spring.jpg");
            }
        } else {
            switch (props.birthMonth) {
                case 'Dec':
                case 'Jan':
                case 'Feb':
                case 'Dec':
                    return setSeason("/img/season/winter.jpg");
                case 'Mar':
                case 'Apr':
                case 'May':
                case 'Mar':
                    return setSeason("/img/season/spring.jpg");
                case 'Jun':
                case 'Jul':
                case 'Aug':

                case 'Jun':
                    return setSeason("/img/season/summer.jpg");
                case 'Sep':
                case 'Oct':
                case 'Nov':

                case 'Sep':
                    return setSeason("/img/season/autumn.jpg");
                default:
                    return setSeason("/img/season/spring.jpg");
            }
        }
    }, [props.birthMonth, props.birthDay])

    useEffect(() => {
        let max = 11;
        let min = 1;
        let rand = min + Math.random() * (max - min);
        let result = Math.floor(rand)
        switch (result) {
            case 1:
                return setAvatar("/img/avatar/car-recycle.jpg");
            case 2:
                return setAvatar("/img/avatar/cat-donut.jpg");
            case 3:
                return setAvatar("/img/avatar/chicken.jpg");
            case 4:
                return setAvatar("/img/avatar/chocolate.jpg");
            case 5:
                return setAvatar("/img/avatar/deer.jpg");
            case 6:
                return setAvatar("/img/avatar/dino-box.jpg");
            case 7:
                return setAvatar("/img/avatar/dino.jpg");
            case 8:
                return setAvatar("/img/avatar/dog.jpg");
            case 9:
                return setAvatar("/img/avatar/joy.jpg");
            case 10:
                return setAvatar("/img/avatar/pizza.jpg");
            default:
                return setAvatar("/img/season/pizza.jpg");
        }
    }, [])

    return (
        <>
            {props.gender === 'male' ?
                <TitlePage style={{ color: "#356BCA" }}>Good Boy!</TitlePage>
                :
                <TitlePage style={{ color: "#F75277" }}>Good Girl!</TitlePage>
            }
            <Wrapper>
                <Row justify="center">
                    <AvatarCard>
                        <AvatarImg src={avatar}></AvatarImg>
                    </AvatarCard>
                </Row>
                <AntCard>
                    <SeasonCover src={season} />
                </AntCard>
            </Wrapper>
        </>
    )
}
export default ShowAvatar;