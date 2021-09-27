const TestSidebar = (props) => {
  return (
    <div className="test__wrapper-sidebar">
      <div className="test__sidebar-box">
        <div className="test__sidebar-num">14</div>
        <div className="test__sidebar-title">Общее количество баллов</div>
      </div>
      <div className="test__sidebar-box">
        <div className="test__sidebar-num">1/4</div>
        <div className="test__sidebar-title">Количество вопросов</div>
      </div>
      <div className="test__sidebar-box">
        <div className="test__sidebar-wrapper test__sidebar-progressWrapper">
          <div className="test__sidebar-subtitle">Прогресс по курсу</div>
          <div className="test__sidebar-percent">10%</div>
        </div>
        <div className="test__sidebar-progress">
          <div className="test__sidebar-progress-activeLine"></div>
        </div>
      </div>
      <div className="test__sidebar-block">
        <div className="test__sidebar-block-box">
          <div className="test__sidebar-block-title">Введение</div>
          <svg
            width="24"
            height="19"
            viewBox="0 0 24 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.092 18.7148L0.855795 0.750248L23.3282 0.75025L12.092 18.7148Z"
              fill="#4D9EF8"
            />
          </svg>
        </div>
        <div className="test__sidebar-block-inner">
          <div className="test__sidebar-block-item">
            <div className="test__sidebar-text">Первые шаги в волонтерства</div>
            <div className="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="assets/check.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="test__sidebar-block">
        <div className="test__sidebar-block-box">
          <div className="test__sidebar-block-title">Модуль 1</div>
          <svg
            width="24"
            height="19"
            viewBox="0 0 24 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.092 18.7148L0.855795 0.750248L23.3282 0.75025L12.092 18.7148Z"
              fill="#4D9EF8"
            />
          </svg>
        </div>
        <div className="test__sidebar-block-inner">
          <div className="test__sidebar-block-item">
            <div className="test__sidebar-text">Первые шаги в волонтерства</div>
            <div className="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="assets/check.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="test__sidebar-block">
        <div className="test__sidebar-block-box">
          <div className="test__sidebar-block-title">Модуль 2</div>
          <svg
            width="24"
            height="19"
            viewBox="0 0 24 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.092 18.7148L0.855795 0.750248L23.3282 0.75025L12.092 18.7148Z"
              fill="#4D9EF8"
            />
          </svg>
        </div>
        <div className="test__sidebar-block-inner">
          <div className="test__sidebar-block-item">
            <div className="test__sidebar-text">Первые шаги в волонтерства</div>
            <div className="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="assets/check.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="test__sidebar-block test__sidebar-block-open">
        <div className="test__sidebar-block-box">
          <div className="test__sidebar-block-title">Модуль 3</div>
          <svg
            width="24"
            height="19"
            viewBox="0 0 24 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.092 18.7148L0.855795 0.750248L23.3282 0.75025L12.092 18.7148Z"
              fill="#4D9EF8"
            />
          </svg>
        </div>
        <div className="test__sidebar-block-inner">
          <div className="test__sidebar-block-item">
            <div className="test__sidebar-text">Первые шаги в волонтерства</div>
            <div className="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="assets/check.svg" alt="" />
            </div>
          </div>
          <div className="test__sidebar-block-item">
            <div className="test__sidebar-text">Первые шаги в волонтерства</div>
            <div className="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="assets/check.svg" alt="" />
            </div>
          </div>
          <div className="test__sidebar-block-item">
            <div className="test__sidebar-text">Первые шаги в волонтерства</div>
            <div className="test__sidebar-block-check">
              <img src="assets/check.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TestSidebar