'use client';

import { useState, useRef } from 'react';

// 밖에로 빼고, 컴포넌트 밖에서 사용하는 변수는 대문자로 작명하는 것이 좋다.
const NumImage = 5; // 등록된 이미지의 개수
export default function Gallery() {
    const [startX, setStartX] = useState(null);
    const [currentX, setCurrentX] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [draggingIndex, setDraggingIndex] = useState(0);
    const carouselRef = useRef(null);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].pageX);
        setCurrentX(e.touches[0].pageX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        setCurrentX(e.touches[0].pageX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        const diff = startX - currentX;
        const newIndex = diff > 0 ? draggingIndex + 1 : draggingIndex - 1;
        const newIndexClamped = Math.min(Math.max(newIndex, 0), NumImage - 1);
        carouselRef.current.style.transform = `translateX(-${newIndexClamped * 100}%)`;
        setDraggingIndex(newIndexClamped);
    };

    return (
        <div className="carousel-wrapper">
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>갤러리</p>
            <br />
            <br />
            <div className="carousel" ref={carouselRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                <img src={`./picture01.jpg`} />
                <img src={`./picture02.jpg`} />
                <img src={`./picture03.jpg`} />
                <img src={`./picture04.jpg`} />
                <img src={`./picture05.jpg`} />
            </div>
            <div className="divide-line" />
        </div>
    );
}
