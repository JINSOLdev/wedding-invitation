"use client";

import { useState, useRef } from "react";

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
    setStartY(e.touches[0].pageY);
    setCurrentX(e.touches[0].pageX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const diffX = Math.abs(e.touches[0].pageX - startX);
    const diffY = Math.abs(e.touches[0].pageY - startY);

    // X축 이동이 Y축 이동보다 크면 슬라이드 동작
    if (diffX > diffY) {
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
    carouselRef.current.style.transform = `translateX(-${
      newIndexClamped * 100
    }%)`;
    setDraggingIndex(newIndexClamped);
  };

  const renderIndicators = () => {
    const indicators = [];
    for (let i = 0; i < NumImage; i++) {
      indicators.push(
        <div
          key={i}
          className={`indicator ${draggingIndex === i ? "active" : ""}`}
          onClick={() => handleIndicatorClick(i)}
        />
      );
    }
    return indicators;
  };

  const handleIndicatorClick = (index) => {
    const newIndexClamped = Math.min(Math.max(index, 0), NumImage - 1);
    carouselRef.current.style.transform = `translateX(-${
      newIndexClamped * 100
    }%)`;
    setDraggingIndex(newIndexClamped);
  };

  return (
    <div className="carousel-wrapper">
      <p>갤러리</p>
      <div
        className="carousel"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img src={`./picture01.jpg`} />
        <img src={`./picture02.jpg`} />
        <img src={`./picture03.jpg`} />
        <img src={`./picture05.jpg`} />
      </div>
      <div className="indicators">{renderIndicators()}</div>
    </div>
  );
}
