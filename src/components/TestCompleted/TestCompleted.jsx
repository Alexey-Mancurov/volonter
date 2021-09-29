import { NavLink } from "react-router-dom";

const TestCompleted = (props) => {
  return <>
    <div class="test__container-wrapper test__wrapper-completed">
      <div class="test__completed">
        <div class="test__completed-wrapper">
          <div class="test__completed-title">Тест завершен</div>
          <div class="test__completed-result">10/10</div>
        </div>
        <div class="test__completed-text">
          Ваш результат: <span>10 баллов из 10</span>
        </div>
        <div class="test__completed-endActions">
          <a href="#" class="test__ask-red test__endActions-btn">
            Готово
          </a>
          <a href="#" class="test__ask-blue  test__endActions-btn">
            Скачать сертификат
          </a>
        </div>
      </div>
      <div class="test__completed">
        <div class="test__completed-wrapper test__wrapper-review">
          <div class="test__completed-title">Оставить отзыв</div>
          <div class="test__completed-review">
            <div class="test__completed-rating">
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.762 0.865234L19.4519 11.8666H31.3925L21.7324 18.6658L25.4222 29.6671L15.762 22.8679L6.10185 29.6671L9.79171 18.6658L0.131529 11.8666H12.0722L15.762 0.865234Z"
                  fill="#F5EE33"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.762 0.865234L19.4519 11.8666H31.3925L21.7324 18.6658L25.4222 29.6671L15.762 22.8679L6.10185 29.6671L9.79171 18.6658L0.131529 11.8666H12.0722L15.762 0.865234Z"
                  fill="#F5EE33"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.762 0.865234L19.4519 11.8666H31.3925L21.7324 18.6658L25.4222 29.6671L15.762 22.8679L6.10185 29.6671L9.79171 18.6658L0.131529 11.8666H12.0722L15.762 0.865234Z"
                  fill="#F5EE33"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6707 0.865234L19.3606 11.8666H31.3012L21.641 18.6658L25.3309 29.6671L15.6707 22.8679L6.01054 29.6671L9.7004 18.6658L0.0402203 11.8666H11.9809L15.6707 0.865234Z"
                  fill="#C4C4C4"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6707 0.865234L19.3606 11.8666H31.3012L21.641 18.6658L25.3309 29.6671L15.6707 22.8679L6.01054 29.6671L9.7004 18.6658L0.0402203 11.8666H11.9809L15.6707 0.865234Z"
                  fill="#C4C4C4"
                />
              </svg>
            </div>
            <div class="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="img/course/icons/check.svg" alt=""></img>
            </div>
          </div>
        </div>
        <textarea
          class="test__completed-textarea"
          placeholder="Текст"
        ></textarea>
      </div>
    </div>
    <div class="test__content">
      <div class="test__content-title">
        Поздравляем, вы успешно завершили курс “Основы волонтёрства для
        начинающих”
      </div>
      <div class="test__container-text">
        Самое время применить полученные знания на практике
      </div>
      <div class="test__container-text">
        Выбирайте близкие вам по духу и интересам мероприятия и становитесь
        частью команды добра
      </div>
      <NavLink to={'/test-checking'} class="test__ask-blueBorder test__content-btn">
        Подробнее
      </NavLink>
    </div>
    <div class="test__wrapper-sidebar test__wrapper-sidebar-mobil">
      <div class="test__sidebar-container">
        <div class="test__sidebar-box">
          <div class="test__sidebar-num">14</div>
          <div class="test__sidebar-title">Общее количество баллов</div>
        </div>
        <div class="test__sidebar-box">
          <div class="test__sidebar-num">1/4</div>
          <div class="test__sidebar-title">Количество вопросов</div>
        </div>
      </div>
      <div class="test__sidebar-box">
        <div class="test__sidebar-wrapper test__sidebar-progressWrapper">
          <div class="test__sidebar-subtitle">Прогресс по курсу</div>
          <div class="test__sidebar-percent">10%</div>
        </div>
        <div class="test__sidebar-progress">
          <div class="test__sidebar-progress-activeLine"></div>
        </div>
      </div>
      <div class="test__sidebar-block">
        <div class="test__sidebar-block-box">
          <div class="test__sidebar-block-title">Введение</div>
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
        <div class="test__sidebar-block-inner">
          <div class="test__sidebar-block-item">
            <div class="test__sidebar-text">Первые шаги в волонтерства</div>
            <div class="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="img/course/icons/check.svg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div class="test__sidebar-block">
        <div class="test__sidebar-block-box">
          <div class="test__sidebar-block-title">Модуль 1</div>
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
        <div class="test__sidebar-block-inner">
          <div class="test__sidebar-block-item">
            <div class="test__sidebar-text">Первые шаги в волонтерства</div>
            <div class="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="img/course/icons/check.svg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div class="test__sidebar-block">
        <div class="test__sidebar-block-box">
          <div class="test__sidebar-block-title">Модуль 2</div>
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
        <div class="test__sidebar-block-inner">
          <div class="test__sidebar-block-item">
            <div class="test__sidebar-text">Первые шаги в волонтерства</div>
            <div class="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="img/course/icons/check.svg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div class="test__sidebar-block test__sidebar-block-open">
        <div class="test__sidebar-block-box">
          <div class="test__sidebar-block-title">Модуль 3</div>
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
        <div class="test__sidebar-block-inner">
          <div class="test__sidebar-block-item">
            <div class="test__sidebar-text">Первые шаги в волонтерства</div>
            <div class="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="img/course/icons/check.svg" alt=""></img>
            </div>
          </div>
          <div class="test__sidebar-block-item">
            <div class="test__sidebar-text">Первые шаги в волонтерства</div>
            <div class="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="img/course/icons/check.svg" alt=""></img>
            </div>
          </div>
          <div class="test__sidebar-block-item">
            <div class="test__sidebar-text">Первые шаги в волонтерства</div>
            <div class="test__sidebar-block-check">
              <img src="img/course/icons/check.svg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="test__wrapper-completed test__wrapper-completed-mobil">
      <div class="test__completed">
        <div class="test__completed-wrapper test__wrapper-review">
          <div class="test__completed-title">Оставить отзыв</div>
          <div class="test__completed-review">
            <div class="test__completed-rating">
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.762 0.865234L19.4519 11.8666H31.3925L21.7324 18.6658L25.4222 29.6671L15.762 22.8679L6.10185 29.6671L9.79171 18.6658L0.131529 11.8666H12.0722L15.762 0.865234Z"
                  fill="#F5EE33"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.762 0.865234L19.4519 11.8666H31.3925L21.7324 18.6658L25.4222 29.6671L15.762 22.8679L6.10185 29.6671L9.79171 18.6658L0.131529 11.8666H12.0722L15.762 0.865234Z"
                  fill="#F5EE33"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.762 0.865234L19.4519 11.8666H31.3925L21.7324 18.6658L25.4222 29.6671L15.762 22.8679L6.10185 29.6671L9.79171 18.6658L0.131529 11.8666H12.0722L15.762 0.865234Z"
                  fill="#F5EE33"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6707 0.865234L19.3606 11.8666H31.3012L21.641 18.6658L25.3309 29.6671L15.6707 22.8679L6.01054 29.6671L9.7004 18.6658L0.0402203 11.8666H11.9809L15.6707 0.865234Z"
                  fill="#C4C4C4"
                />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6707 0.865234L19.3606 11.8666H31.3012L21.641 18.6658L25.3309 29.6671L15.6707 22.8679L6.01054 29.6671L9.7004 18.6658L0.0402203 11.8666H11.9809L15.6707 0.865234Z"
                  fill="#C4C4C4"
                />
              </svg>
            </div>
            <div class="test__sidebar-block-check test__sidebar-block-check-completed">
              <img src="img/course/icons/check.svg" alt=""></img>
            </div>
          </div>
        </div>
        <textarea
          class="test__completed-textarea"
          placeholder="Текст"
        ></textarea>
      </div>
    </div>
  </>;
};

export default TestCompleted;