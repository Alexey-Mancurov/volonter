import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://url/',
})

export const coursesAPI = {
    courses: () => {
        return instanse
            .get(`courses`)
    },
    courseItem: (courseId) => {
        return axios
            .get(`courses/${courseId}`)
    },
    modules: (courseId) => {
        return instanse
            .get(`courses/${courseId}/modules`)
    },
    lessons: (courseId, moduleId) => {
        return instanse
            .get(`courses/${courseId}/modules/${moduleId}/lessons`)
    },
    lessonItem: (courseId, moduleId, lessonId) => {
        return instanse
            .get(`courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`)
    }
}

export const TestsAPI = {
    tests: () => {
        return instanse
            .get(`tests`)
    },
    testItem: (testId) => {
        return instanse
            .get(`tests/${testId}`)
    },
    testCompleted: (testId, asksList) => {
        return instanse
            .post(`tests/completed`, [testId, {
                asksList: asksList
            }])
    },
    testCompletedItem: (testId) => {
        return instanse
            .get(`tests/completed/${testId}`)
    },
}