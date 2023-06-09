const Product = require('../models/product.js');
const fs = require('fs');
const path = require('path');
class ProductController {
    save = (data) => {
        return new Promise(
            (resolve, reject) => {
                try {
                    const product = new Product(
                        {
                            name: data.name,
                            description: data.description,
                            original_price: data.o_price,
                            discounted_price: data.d_price,
                            category_id: data.category,
                            color_id: data.color,
                            image: data.image
                        }
                    )
                    product.save()
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
                                console.log(error)
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
                        let data = await Product.findById(id);
                        if (data == null) {
                            rejected({
                                status: 0,
                                msg: "Data not found"
                            });
                        } else {
                            resolve({
                                status: 1,
                                product: data,
                                path: "http://localhost:5000/uploads/product/",
                            });
                        }

                    } else {
                        let data = await Product.find().sort({
                            _id: 'desc'
                        });
                        resolve({
                            status: 1,
                            product: data,
                            path: "http://localhost:5000/uploads/product/",
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
    deleteData = (id, imgName) => {
        return new Promise(
            async (resolve, reject) => {
                try {
                    Product.deleteOne({ _id: id })
                        .then(
                            () => {
                                const imagePath = path.join(__dirname, "../", "public/uploads/category", imgName);
                                fs.unlinkSync(imagePath); //delete
                                resolve({
                                    msg: "Data deleted",
                                    status: 1
                                });
                            }
                        ).catch(
                            (error) => {
                                console.log(error);
                                reject({
                                    msg: "Unable to delete the data",
                                    status: 0
                                });
                            }
                        )
                }
                catch (err) {
                    reject({
                        msg: "Internal server error",
                        status: 0
                    });
                }
            }
        )
    }

    updateData = (id, newData) => {
        return new Promise(
            (resolve, reject) => {
                Product.updateOne(
                    {
                        _id: id
                    },
                    newData
                ).then(
                    (success) => {
                        resolve({
                            msg: "Data updated",
                            status: 1
                        });
                    }
                ).catch(
                    (error) => {
                        reject({
                            msg: "Unable to update the data",
                            status: 0
                        });
                    }
                )
            }
        )
    }

    categoryProduct = (cid) => {
        console.log(cid);
        return new Promise(
            async (resolve, rejected) => {
                try {
                    let data = await Product.find({
                        'category_id': cid
                    }).sort({
                        _id: 'desc'
                    });
                    resolve({
                        status: 1,
                        product: data,
                        path: "http://localhost:5000/uploads/product/",
                        msg: `Total ${data.length} records found`
                    });

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

    colorProduct = (cid) => {
        return new Promise(
            async (resolve, rejected) => {
                try {
                    let data = await Product.find({
                        'color_id': cid,
                        'original_price': {
                            $gt: "500",
                            $lt: "1000"
                        }
                    }).sort({
                        _id: 'desc'
                    });
                    resolve({
                        status: 1,
                        product: data,
                        path: "http://localhost:5000/uploads/product/",
                        msg: `Total ${data.length} records found`
                    });

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
    filterProduct = (filter) => {
        return new Promise(
            async (resolve, rejected) => {
                let filterData = {};
                if (filter.category !== null) {
                    filterData = {
                        ...filterData,
                        category_id: filter.category
                    }
                }
                if (filter.color !== null) {
                    filterData = {
                        ...filterData,
                        color_id: filter.color
                    }
                }
                if (filter.from != 0 && filter.to != 0) {
                    filterData = {
                        ...filterData,
                        original_price: {
                            $gt: filter.from,
                            $lt: filter.to,
                        }
                    }
                }
                try {
                    let data = await Product.find(filterData).sort({
                        _id: 'desc'
                    });
                    resolve({
                        status: 1,
                        product: data,
                        path: "http://localhost:5000/uploads/product/",
                        msg: `Total ${data.length} records found`
                    });

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

module.exports = ProductController;