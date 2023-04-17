import axios from "axios";
// process.env.BASE_URL;
const moduleUrl = "/category";
const addCategory = (data) => {
    console.log(data)
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

const getCategory = () => {
    return new Promise(
        (resolve, reject) => {
            axios.get(process.env.REACT_APP_API_BASE_URL + moduleUrl)
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

export { addCategory, getCategory };