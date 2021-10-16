import { NavLink } from "react-router-dom";

const CourseItem = (props) => {
  let id = props.id;

  return (
    <div class="courses__list-item">
      <div class="courses__item-wrapper">
        <div class="courses__item-container">
          {props.tier ? (
            <p class="courses__item-level">Продвинутый</p>
          ) : (
            <p class="courses__item-level">Базовый</p>
          )}
          <div class="courses__item-title">{props.title}</div>
        </div>
        {props.isFavorite ? (
          <div class="courses__item-favorit">
            <svg
              width="22"
              height="32"
              viewBox="0 0 22 32"
              fill="#0491FB"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7365 0.668701H1.41558C0.917487 0.668701 0.513672 1.07252 0.513672 1.57061V30.552C0.513672 30.9168 0.733437 31.2456 1.07045 31.3852C1.18205 31.4315 1.29924 31.4539 1.4154 31.4539C1.65014 31.4539 1.88079 31.3623 2.05335 31.1897L11.0762 22.1669L20.0988 31.1897C20.3567 31.4476 20.7447 31.5248 21.0817 31.3852C21.4187 31.2456 21.6384 30.9168 21.6384 30.552V1.57061C21.6384 1.07252 21.2346 0.668701 20.7365 0.668701ZM11.0762 19.9895C10.837 19.9895 10.6076 20.0845 10.4385 20.2537L2.31749 28.3746V2.47252H19.8346V28.3745L11.714 20.2537C11.5448 20.0845 11.3154 19.9895 11.0762 19.9895Z"
                fill="#0491FB"
              />
            </svg>
          </div>
        ) : (
          <div
            class="courses__item-favorit"
            style={{ backgroundColor: "#0491FB" }}
          >
            <svg
              width="22"
              height="32"
              viewBox="0 0 22 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7365 0.668701H1.41558C0.917487 0.668701 0.513672 1.07252 0.513672 1.57061V30.552C0.513672 30.9168 0.733437 31.2456 1.07045 31.3852C1.18205 31.4315 1.29924 31.4539 1.4154 31.4539C1.65014 31.4539 1.88079 31.3623 2.05335 31.1897L11.0762 22.1669L20.0988 31.1897C20.3567 31.4476 20.7447 31.5248 21.0817 31.3852C21.4187 31.2456 21.6384 30.9168 21.6384 30.552V1.57061C21.6384 1.07252 21.2346 0.668701 20.7365 0.668701ZM11.0762 19.9895C10.837 19.9895 10.6076 20.0845 10.4385 20.2537L2.31749 28.3746V2.47252H19.8346V28.3745L11.714 20.2537C11.5448 20.0845 11.3154 19.9895 11.0762 19.9895Z"
                fill="#fff"
              />
            </svg>
          </div>
        )}
      </div>
      <p class="courses__item-text">{props.description}</p>
      <div class="courses__item-footer">
        <div class="courses__item-footer-inner">
          <img src={props.author.img} alt="" class="courses__item-img" />
          <div class="courses__item-footer-box">
            <p class="courses__item-name">{props.author.name}</p>
            <p class="courses__item-status">Автор курса</p>
          </div>
        </div>
        <NavLink
          to={{
            pathname: "/lesson",
            state: {
              courseId: props.id,
            },
          }}
          class="test__ask-blue courses__item-btn"
          onClick={() => props.getCourseId(id)}
        >
          Пройти курс
        </NavLink>
      </div>
    </div>
  );
};

export default CourseItem;
