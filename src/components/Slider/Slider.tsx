import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

import { useState } from 'react';
import { Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { ScreenExample } from '../ScreenExample';
import { screens } from './config';

export function Slider(): JSX.Element {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  const prevHandler = () => {
    swiperRef?.slidePrev();

    if (swiperRef?.isBeginning) setIsBeginning(true);
    setIsEnd(false);
  };

  const nextHandler = () => {
    swiperRef?.slideNext();

    if (swiperRef?.isEnd) setIsEnd(true);
    setIsBeginning(false);
  };

  return (
    <>
      <Swiper
        modules={[Pagination, Keyboard]}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          1620: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => setSwiperRef(swiper)}
      >
        {screens.map((item) => (
          <SwiperSlide key={item.type}>
            <ScreenExample {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-buttons-wrapper">
        <button
          disabled={isBeginning}
          className="swiper-prev-button"
          onClick={prevHandler}
        >
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          disabled={isEnd}
          className="swiper-next-button"
          onClick={nextHandler}
        >
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </>
  );
}
