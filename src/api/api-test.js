import axios from "axios";

const instace = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "73aae822-de1b-4c23-a736-e843b832757e",
    },
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 5) => {
        return instace
            .get(
                `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow: (userId) => {
        return instace
            .delete(
                `follow/${userId}`)
    },
    follow: (userId) => {
        return instace
            .post(
                `follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instace
            .get(
                `profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus: (userId) => {
        return instace
            .get(
                `profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus: (status) => {
        return instace
            .put(
                `profile/status`, {
                    status: status
                })
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuthMe: () => {
        return instace
            .get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login: (email, password, rememberMe = false) => {
        return instace.post('auth/login', {email, password, rememberMe})
    },
    logout: () => {
        return instace.delete('auth/login')
    }
}