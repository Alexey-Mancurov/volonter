import axios from "axios";

const instanse = axios.create({
    withCredentials: false,
    baseURL: 'https://xn--80aejrhmfbnher.xn--p1ai/api/',
    headers: {
        "Access-Control-Allow-Origin": "Access-Control-Allow-Origin"
    },


})
// export default function courseItem(courseId) {
//     return axios
//         .get(`courses/${courseId}`)
// }

export const coursesAPI = {
    courses: () => {
        return instanse
            .get(`courses/`)
            .then(response => {
                return response.data
            })
    },
    courseItem: (courseId) => {
        
        return instanse
            .get(`courses/${courseId}`)
            .then(response => {
                return response.data
            })
    },
    modules: (courseId) => {
        return instanse
            .get(`courses/${courseId}/modules`)
            .then(response => {
                return response.data
            })
    },
    lessons: (courseId, moduleId) => {
        return instanse
            .get(`courses/${courseId}/modules/${moduleId}/lessons`)
            .then(response => {
                return response.data
            })
    },
    lessonItem: (courseId, moduleId, lessonId) => {
        return instanse
            .get(`courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`)
            .then(response=>{
                return response.data
            })
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
            .then(response => {
                return response.data
            })
    },
    testCompleted: (data) => {
        return instanse
            .post(`tests/completed`, data).then(response=>{
                console.log(response.data)
                return response.data
            })
    },
    testCompletedItem: (testId) => {
        return instanse
            .get(`tests/completed/${testId}`)
    },
}