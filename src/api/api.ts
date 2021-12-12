import axios from "axios";
import { CourseItemType, CoursesDetailType, CoursesReviewsType, CoursesType, LessonItemType, LessonsType, ModulesType } from "./TypesAPI";

const instanse = axios.create({
  withCredentials: false,
  baseURL: "https://xn--80aejrhmfbnher.xn--p1ai/api/",
  headers: {
    "Access-Control-Allow-Origin": "Access-Control-Allow-Origin",
  },
});

export const coursesAPI = {
  courses: () => {
    return instanse.get<CoursesType>(`courses/`).then((response) => {
      return response.data;
    });
  },
  // courseFavorite: (courseId: number) => {
  //   return instanse
  //     .post("/courses/favorite", {
  //       courseId,
  //     })
  //     .then((response) => {
  //       return response.data;
  //     });
  // },
  // for work without API
  courseFavorite: (current: boolean) => {
    return !current
  },

  coursesReviews: (courseId: number) => {
    return instanse
      .get<CoursesReviewsType>(`/courses/detail/${courseId}/reviews`)
      .then((response) => {
        return response.data;
      });
  },
  coursesReviewAdded: (courseId: number, rating: number, text: string) => {
    return instanse
      .post(`/courses/detail/${courseId}/reviews`, { rating, text })
      .then((response) => {
        return response.data;
      });
  },
  coursesDetail: (courseId: number) => {
    return instanse.get<CoursesDetailType>(`/courses/detail/${courseId}`).then((response) => {
      return response.data;
    });
  },
  courseItem: (courseId: number) => {
    return instanse.get<CourseItemType>(`courses/${courseId}`).then((response) => {
      return response.data;
    });
  },
  modules: (courseId: number) => {
    return instanse.get<ModulesType>(`courses/${courseId}/modules`).then((response) => {
      return response.data;
    });
  },
  lessons: (courseId: number, moduleId: number) => {
    return instanse
      .get<LessonsType>(`courses/${courseId}/modules/${moduleId}/lessons`)
      .then((response) => {
        return response.data;
      });
  },
  lessonItem: (courseId: number, moduleId: number, lessonId: number) => {
    return instanse
      .get<LessonItemType>(`courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const TestsAPI = {
  tests: () => {
    return instanse.get(`tests`);
  },
  testItem: (testId: number) => {
    return instanse.get(`tests/${testId}`).then((response) => {
      return response.data;
    });
  },
  testCompleted: (data: object | Array<any>) => {
    return instanse.post(`tests/completed`, data).then((response) => {
      return response.data;
    });
  },
  testCompletedItem: (testId: number) => {
    return instanse.get(`tests/completed/${testId}`);
  },
};
