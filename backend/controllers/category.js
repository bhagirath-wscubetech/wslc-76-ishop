const Category = require('../models/category.js');
class CategoryController {
    save = (data) => {
        return new Promise(
            (resolve, reject) => {
                try {
                    const category = new Category(
                        {
                            name: data.name,
                            slug: data.slug,
                        }
                    )
                    category.save()
                        .then(
                            (success) => {
                                resolve({
                                    msg: "Data added successfully",
                                    status: 1
                                })
                            }
                        )
                        .catch(
                            (error) => {
                                reject({
                                    msg: "Unable to add data",
                                    status: 0
                                })
                            }
                        )
                } catch (err) {
                    reject({
                        msg: err.message,
                        status: 0
                    })
                }
            }
        )
    }
    getData = async (id) => {
        return new Promise(
            async (resolve, rejected) => {
                try {
                    if (id !== undefined) {
                        let data = await Category.findById(id);
                        if (data == null) {
                            rejected({
                                status: 0,
                                msg: "Data not found"
                            });
                        } else {
                            resolve({
                                status: 1,
                                category: data
                            });
                        }

                    } else {
                        let data = await Category.find().sort({
                            _id: 'desc'
                        });
                        resolve({
                            status: 1,
                            category: data,
                            msg: `Total ${data.length} records found`
                        });
                    }
                }
                catch (err) {
                    rejected({
                        status: 0,
                        msg: err.message + "Interal server error"
                    });
                }
            }
        )
    }
}

module.exports = CategoryController;