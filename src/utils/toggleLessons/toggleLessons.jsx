export const next = (
  lessonsList,
  modules,
  currentLessonIndex,
  currentModuleIndex,
  setCurrentLessonIndex,
  setCurrentModuleIndex
) => {
    debugger
  if (lessonsList.items.length !== currentLessonIndex + 1) {
    setCurrentLessonIndex(currentLessonIndex + 1);
  } else {
    if (modules.items.length !== currentModuleIndex + 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
    } else {
      alert("Это последний урок");
    }
  }
};

export const prev = (
  currentLessonIndex,
  currentModuleIndex,
  setCurrentLessonIndex,
  setCurrentModuleIndex
) => {
  if (currentLessonIndex === 0 && currentModuleIndex === 0) {
    setCurrentLessonIndex(0);
    setCurrentModuleIndex(0);
    alert("Это самый первый урок");
  } else if (currentLessonIndex > 0) {
    setCurrentLessonIndex(currentLessonIndex - 1);
  } else if (currentLessonIndex === 0 && currentModuleIndex !== 0) {
    setCurrentModuleIndex(currentModuleIndex - 1);
    setCurrentLessonIndex(0);
  }
};
