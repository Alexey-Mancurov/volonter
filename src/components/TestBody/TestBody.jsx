import TestModilSidebar from "../TestSidebar/TestMobilSidebar";
import TestSidebar from "../TestSidebar/TestSidebar";
import TestContainer from "./TestContainer/TestContainer";


const TestBody = (props) => {
  return (
    <div className="test__wrapper-body">
      <TestContainer />
      <TestModilSidebar />
      <p className="cource__title-2">Слушатели этого курса также проходят</p>
      {/* Подумать, получится ли слайдер встроить не на реакте */}
      <div className="test__swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide cource__swiper-slide">
            <p className="course__title-4 cource__swiper-title">
              Волонтёрство в сфере культуры
            </p>
            <p className="course__text cource__swiper-text">
              Программа курса разработана специалистами Ассоциации волонтерских
              центров — крупнейшей организации, развивающей добровольчество.
            </p>
            <a href="#" className="cource__swiper-btn">
              Подробнее
            </a>
          </div>
          <div className="swiper-slide cource__swiper-slide">
            <p className="course__title-4 cource__swiper-title">
              Волонтёрство в сфере культуры
            </p>
            <p className="course__text cource__swiper-text">
              Программа курса разработана специалистами Ассоциации волонтерских
              центров — крупнейшей организации, развивающей добровольчество.
            </p>
            <a href="#" className="cource__swiper-btn">
              Подробнее
            </a>
          </div>
          <div className="swiper-slide cource__swiper-slide">
            <p className="course__title-4 cource__swiper-title">
              Волонтёрство в сфере культуры
            </p>
            <p className="course__text cource__swiper-text">
              Программа курса разработана специалистами Ассоциации волонтерских
              центров — крупнейшей организации, развивающей добровольчество.
            </p>
            <a href="#" className="cource__swiper-btn">
              Подробнее
            </a>
          </div>
          <div className="swiper-slide cource__swiper-slide">
            <p className="course__title-4 cource__swiper-title">
              Волонтёрство в сфере культуры
            </p>
            <p className="course__text cource__swiper-text">
              Программа курса разработана специалистами Ассоциации волонтерских
              центров — крупнейшей организации, развивающей добровольчество.
            </p>
            <a href="#" className="cource__swiper-btn">
              Подробнее
            </a>
          </div>
          <div className="swiper-slide cource__swiper-slide">
            <p className="course__title-4 cource__swiper-title">
              Волонтёрство в сфере культуры
            </p>
            <p className="course__text cource__swiper-text">
              Программа курса разработана специалистами Ассоциации волонтерских
              центров — крупнейшей организации, развивающей добровольчество.
            </p>
            <a href="#" className="cource__swiper-btn">
              Подробнее
            </a>
          </div>
          <div className="swiper-slide cource__swiper-slide">
            <p className="course__title-4 cource__swiper-title">
              Волонтёрство в сфере культуры
            </p>
            <p className="course__text cource__swiper-text">
              Программа курса разработана специалистами Ассоциации волонтерских
              центров — крупнейшей организации, развивающей добровольчество.
            </p>
            <a href="#" className="cource__swiper-btn">
              Подробнее
            </a>
          </div>
          <div className="swiper-slide cource__swiper-slide">
            <p className="course__title-4 cource__swiper-title">
              Волонтёрство в сфере культуры
            </p>
            <p className="course__text cource__swiper-text">
              Программа курса разработана специалистами Ассоциации волонтерских
              центров — крупнейшей организации, развивающей добровольчество.
            </p>
            <a href="#" className="cource__swiper-btn">
              Подробнее
            </a>
          </div>
        </div>

        <div className="cource__swiper-pagination"></div>

        <div className="cource__swiper-prev">
          <svg
            width="21"
            height="36"
            viewBox="0 0 21 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.735563 19.2835L16.4888 34.708C16.8531 35.065 17.3395 35.2617 17.8581 35.2617C18.3767 35.2617 18.8631 35.065 19.2275 34.708L20.3876 33.5723C21.1425 32.8323 21.1425 31.6296 20.3876 30.8907L7.15922 17.9382L20.4023 4.97123C20.7666 4.61419 20.9678 4.13824 20.9678 3.63072C20.9678 3.12263 20.7666 2.64668 20.4023 2.28936L19.2421 1.15399C18.8775 0.796955 18.3914 0.600261 17.8728 0.600261C17.3542 0.600261 16.8678 0.796955 16.5035 1.15399L0.735563 16.5926C0.370348 16.9508 0.169752 17.429 0.170904 17.9373C0.169752 18.4477 0.370347 18.9256 0.735563 19.2835Z"
              fill="#A0A0A0"
            />
          </svg>
        </div>
        <div className="cource__swiper-next">
          <svg
            width="22"
            height="36"
            viewBox="0 0 22 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0374 16.5778L5.28418 1.15334C4.91983 0.796305 4.43345 0.599609 3.91483 0.599609C3.39622 0.599609 2.90984 0.796305 2.54549 1.15334L1.38538 2.28899C0.630483 3.02899 0.630483 4.23171 1.38538 4.97058L14.6137 17.9232L1.3707 30.8901C1.00635 31.2471 0.805176 31.7231 0.805176 32.2306C0.805176 32.7387 1.00635 33.2146 1.3707 33.572L2.53081 34.7073C2.89545 35.0644 3.38155 35.2611 3.90016 35.2611C4.41877 35.2611 4.90515 35.0644 5.2695 34.7073L21.0374 19.2687C21.4026 18.9106 21.6032 18.4324 21.602 17.924C21.6032 17.4137 21.4026 16.9357 21.0374 16.5778Z"
              fill="#A0A0A0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestBody
