const CourseDetailAddedFavorite = (props) => {
  if (props.isFavorite) {
    return (
      <div
        className="course__header-favorit"
        onClick={() => {
          props.favoriteToggle(props.courseId);
        }}
      >
        Удалить из избранного
      </div>
    );
  } else {
      return(
              <div
      className="course__header-favorit"
      onClick={() => {
        props.favoriteToggle(props.courseId);
      }}
    >
      Добавить в избранное
    </div>
      )

  }
};

export default CourseDetailAddedFavorite;
