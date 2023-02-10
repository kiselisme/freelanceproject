import React from 'react';
import Header from '../../components/Header/Header';
import Performers from '../../components/Performers/Performers';
import Service from '../../components/Service/Service';
import Description from '../../components/Description/Description';
import LastBlock from '../../components/LastBlock/LastBlock';

const Main = () => {
    return (
        <>
            <Service/>
            <Performers/>
            <Description/>
            <LastBlock/>
        </>
    );
};

export default Main;