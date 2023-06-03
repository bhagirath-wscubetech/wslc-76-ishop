import axios from "axios";
// process.env.BASE_URL;
const moduleUrl = "/color";
const addColor = (data) => {
    return new Promise(
        (resolve, reject) => {
            axios.post(
                process.env.REACT_APP_API_BASE_URL + moduleUrl,
                data
            )
                .then(
                    (success) => {
                        resolve(success);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                )
        }
    )
}

const getColor = (id = null) => {
    return new Promise(
        (resolve, reject) => {
            let apiUrl = process.env.REACT_APP_API_BASE_URL + moduleUrl;
            if (id !== null) {
                apiUrl += "/" + id;
            }
            axios.get(apiUrl)
                .then(
                    (success) => {
                        resolve(success);
                    }
                )
                .catch(
                    (error) => {
                        reject(error);
                    }
                )
        }
    )
}

const deleteColor = (id, imgName) => {
    return new Promise(
        (resolve, reject) => {
            axios.delete(process.env.REACT_APP_API_BASE_URL + moduleUrl + "/" + id + "/" + imgName)
                .then(
                    (success) => {
                        resolve(success);
                    }
                )
                .catch(
                    (error) => {
                        reject(error);
                    }
                )
        }
    )
}

const updateColor = (id, data) => {
    return new Promise(
        (resolve, reject) => {
            axios.post(
                process.env.REACT_APP_API_BASE_URL + moduleUrl + "/update/" + id,
                data
            )
                .then(
                    (success) => {
                        resolve(success);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                )
        }
    )
}
export { addColor, getColor, deleteColor, updateColor };