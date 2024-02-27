'use client';

import { useState, useRef } from 'react';

const NumImage = 4; // 등록된 이미지의 개수
export default function Gallery() {
    const [startX, setStartX] = useState(null);
    const [startY, setStartY] = useState(null);
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

        // 사진 확대해도 슬라이드 넘어가지 않도록 수정
        const diffX = Math.abs(e.touches[0].pageX - startX);
        const diffY = Math.abs(e.touches[0].pageY - startY);
        if (diffX - diffY + 5) {
            e.preventDefault();
            setCurrentX(e.touches[0].pageX);
        } else {
            setIsDragging(false);
        }
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
            <p>갤러리</p>
            <div className="carousel" ref={carouselRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                <img src={`./picture01.jpg`} />
                <img src={`./picture02.jpg`} />
                <img src={`./picture03.jpg`} />
                <img src={`./picture05.jpg`} />
            </div>
        </div>
    );
}
