import http from './axios'

const getAll = async (path) => {
	return await http.get(path).then((res) => res.data)
}

const post = async (path, data) => {
	return await http.post(path, data)
}

const api = {
	getAll,
	post
}

export default api
