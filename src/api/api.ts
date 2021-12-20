import axios from "axios";
import {
  CourseItemType,
  CoursesDetailType,
  CoursesReviewsType,
  CoursesType,
  LessonItemType,
  LessonsType,
  ModulesType,
} from "./TypesAPI";

const instanse = axios.create({
  withCredentials: false,
  baseURL: "https://xn--80aejrhmfbnher.xn--p1ai/api/",
  headers: {
    "Access-Control-Allow-Origin": "Access-Control-Allow-Origin",
  },
});

export const coursesAPI = {
  courses: async () => {
    try {
      const res = await instanse.get<CoursesType>(`courses/`);
      const data = await res.data;
      return data;
    } catch (err) {
      alert(err);
    }
  },
  // courseFavorite: async (courseId: number) => {
  //   try {
  //     const res = await instanse.post("/courses/favorite", {
  //       courseId,
  //     });
  //     const data = res.data;
  //     return data;
  //   } catch (err) {
  //     alert(err);
  //   }
  // },
  // for work without API
  courseFavorite: (current: boolean) => {
    return !current;
  },

  coursesReviews: async (courseId: number) => {
    try {
      const res = await instanse.get<CoursesReviewsType>(
        `/courses/detail/${courseId}/reviews`
      );
      const data = await res.data;
      return data;
    } catch (err) {
      alert(err);
    }
  },
  coursesReviewAdded: async (
    courseId: number,
    rating: number,
    text: string
  ) => {
    try {
      const res = await instanse.post(`/courses/detail/${courseId}/reviews`, {
        rating,
        text,
      });
      // @ts-ignore
      const data = await res.data;
      return data;
    } catch (err) {
      alert(err);
    }
  },
  coursesDetail: async (courseId: number) => {
    try {
      const res = await instanse.get<CoursesDetailType>(
        `/courses/detail/${courseId}`
      );
      // @ts-ignore
      const data = await res.data;
      return data;
    } catch (err) {
      alert(err);
    }
  },
  courseItem: async (courseId: number) => {
    try {
      const res = await instanse.get<CourseItemType>(`courses/${courseId}`);
      const data = await res.data;
      return data;
    } catch (err) {
      alert(err);
    }
  },
  modules: async (courseId: number) => {
    try {
      const res = await instanse.get<ModulesType>(
        `courses/${courseId}/modules`
      );
      const data = await res.data;
      return data;
    } catch (err) {
      alert(err);
    }
  },
  lessons: async (courseId: number, moduleId: number) => {
    try {
      const res = await instanse.get<LessonsType>(
        `courses/${courseId}/modules/${moduleId}/lessons`
      );
      const data = await res.data;
      return data;
    } catch (err) {
      alert(err);
    }
  },
  lessonItem: async (courseId: number, moduleId: number, lessonId: number) => {
    try {
      const res = await instanse.get<LessonItemType>(
        `courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`
      );
      const data = await res.data;
      return data;
    } catch (err) {
      alert(err);
    }
  },
};

export const TestsAPI = {
  tests: async () => {
    try {
      const data = await instanse.get(`tests`);
      return data;
    } catch (err) {
      alert(err);
    }
  },
  testItem: async (testId: number) => {
    try {
      const res = await instanse.get(`tests/${testId}`);
      const data = await res.data;
      return data;
    } catch (err) {
      alert(err);
    }
  },
  testCompleted: async (data: object | Array<any>) => {
    try {
      const res = await instanse.post(`tests/completed`, data);
      const dataRes = await res.data;
      return dataRes;
    } catch (err) {
      alert(err);
    }
  },
  testCompletedItem: async (testId: number) => {
    try {
      const data = await instanse.get(`tests/completed/${testId}`);
      return data;
    } catch (err) {
      alert(err);
    }
  },
};
