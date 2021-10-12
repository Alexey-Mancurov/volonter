const TestCompletedReviews = (props) => {
  return (
    <div className="test__completed">
      <div className="test__completed-wrapper test__wrapper-review">
        <div className="test__completed-title">Оставить отзыв</div>
        <div className="test__completed-review">
          <div className="test__completed-rating">
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
          <div className="test__sidebar-block-check test__sidebar-block-check-completed">
            <img src="img/course/icons/check.svg" alt=""></img>
          </div>
        </div>
      </div>
      <textarea
        className="test__completed-textarea"
        placeholder="Текст"
      ></textarea>
    </div>
  );
};

export default TestCompletedReviews;
