import db from '../config/database.js'

export const getServices = (result) => {
    db.query("SELECT * FROM service", (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            result(null, results);
        }
    })
}

export const getServiceById = (id, result) => {
    db.query("SELECT * FROM service WHERE id = ?", [id], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            result(null, results[0]);
        }
    })
}

export const insertService = (data, result) => {
    db.query("INSERT INTO service SET ?", [data], (err, results)=> {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}