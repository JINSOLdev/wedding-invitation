'use client';

import React, { userEffect } from 'react';
import KakaoMapScript from './KakaoMapScript.js';

export default function Map() {
    userEffect(() => {
        KakaoMapScript();
    }, []);

    return <div id="myMap" style={{ width: '90%', height: '400px', display: 'block', margin: '2rem', textAlign: 'center' }}></div>;
}
