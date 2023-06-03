const Color = require('../models/color.js');
const fs = require('fs');
const path = require('path');
class ColorController {
    save = (data) => {
        console.log("data",data);
        return new Promise(
            (resolve, reject) => {
                try {
                    const color = new Color(
                        {
                            name: data.name,
                            color: data.color
                        }
                    )
                    color.save()
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
                        let data = await Color.findById(id);
                        if (data == null) {
                            rejected({
                                status: 0,
                                msg: "Data not found"
                            });
                        } else {
                            resolve({
                                status: 1,
                                color: data
                            });
                        }

                    } else {
                        let data = await Color.find().sort({
                            _id: 'desc'
                        });
                        resolve({
                            status: 1,
                            color: data,
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
                    Color.deleteOne({ _id: id })
                        .then(
                            () => {
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
                    console.log(err.message);
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
                Color.updateOne(
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

}

module.exports = ColorController;