const express = require('express');
const app = express();
const connection = require('./database');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const nodemailer = require("nodemailer");
const port = 3001;
const saltRounds = 10;

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


/**
 * CRUD API FOR USER TABLE
 */


/**
 * CREATE A USER
 */
app.post('/api/users/create', function (req, res) {
    const sql = "INSERT INTO `User` (`username`, `password`, `name`, `email`, `dob`, `contact`, `org_email`) VALUES (?, ?, ?, ?, ?, ?, ?);"
    let password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            throw err;
        }
        const value = [
            req.body.username,
            hash,
            req.body.name,
            req.body.email,
            req.body.dob,
            req.body.contact,
            req.body.orgEmail
        ]
        connection.query(sql, value, (error, results) => {
            if (error) {
                res.send({ error: error })
            }
            res.send({
                message: "User created!"
            })
        })
    })
})

/**
 * GET ALL USERS
 */
app.get('/api/users', function (req, res) {
    let sql = "SELECT * FROM User;"
    connection.query(sql, function (err, results) {
        if (err) {
            throw err;
        }
        res.send(results);
    })
});


/**
 * GET A USER DETAIL BY ID
 */
app.get('/api/users/getById', function (req, res) {
    let sql = "SELECT * FROM User WHERE id = ?";
    connection.query(
        sql,
        [req.query.id],
        function (err, rows, fields) {
            if (err) throw err;
            if (rows.length === 0) {
                res.send({
                    "message": "No record found!"
                })
            }
            else {
                res.send(rows);
            }
        })
})


/**
 * API TO VERIFY A USER'S LOGIN CREDENTIALS
 */
app.post("/api/login", (req, res) => {

    const sql = "SELECT * FROM User WHERE username = ?";
    const data = [req.body.username];

    connection.query(sql, data, (err, results) => {
        if (err) {
            throw err;
        }
        if (results.length > 0) {
            bcrypt.compare(req.body.password, results[0].password, (error, response) => {
                if (error) {
                    throw error;
                }
                if (response) {
                    res.send({
                        data: results,
                        message: "Record found!",
                        response: response
                    })
                }
                else {
                    res.send({
                        message: "Incorrect password",
                        response: response
                    })
                }
            }
            )
        }
        else {
            res.send({
                data: results,
                message: "No records found!"
            })
        }
    }
    );
})

/**
 * UPDATE USER DETAIL
 */


/**
 * DELETE USER BY ID
 */
app.delete('/api/users/:id', function (req, res) {
    let sql = "DELETE FROM User WHERE id = ?";
    connection.query(sql, [req.params.id], function (err, rows, fields) {
        if (err) throw err;
        res.send("User deleted!")
    })
})


/**
 * DELETE ALL USERS
 */
app.delete('/api/users/', function (req, res) {
    let sql = "TRUNCATE TABLE User";
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err;
        res.send({
            "message ": "All Users deleted!"
        })
    })
})


/**
 * CRUD API FOR OWNER TABLE
 */


/**
 * CREATE AN OWNER
 */
app.post('/api/owners/create', (req, res) => {
    let sql = `INSERT INTO Owner(username, password, name, email, dob, contact, bio) VALUES(?, ?, ?, ?, ?, ?, ?)`;
    let password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            throw err;
        }
        const value = [
            req.body.username,
            hash,
            req.body.name,
            req.body.email,
            req.body.dob,
            req.body.contact,
            req.body.bio
        ]
        connection.query(sql, value, (error, results) => {
            if (error) {
                res.send({ error: error })
            }
            res.send({
                message: "Owner created!"
            })
        })
    })
})

/**
 * Verify an owner by username and password
 */
app.post("/api/ownerLogin", (req, res) => {

    const sql = "SELECT * FROM Owner WHERE username = ?";
    const data = [req.body.username];

    connection.query(sql, data, (err, results) => {
        if (err) {
            res.send({ err: err })
        }
        if (results.length > 0) {
            bcrypt.compare(req.body.password, results[0].password, (error, response) => {
                if (error) {
                    res.send({ error: error })
                }
                if (response) {
                    res.send({
                        data: results,
                        message: "Record found!",
                        response: response
                    })
                }
                else {
                    res.send({
                        message: "Incorrect password",
                        response: response
                    })
                }
            }
            )
        }
        else {
            res.send({
                data: results,
                message: "No records found!"
            })
        }
    }
    );
})

/**
 * GET ALL OWNERS
 */
app.get('/api/owners', function (req, res) {
    let sql = "SELECT * FROM Owner;"
    connection.query(sql, function (err, results) {
        if (err) {
            throw err;
        }
        res.send(results);
    })
});


/**
 * GET OWNER DETAIL BY ID
 */
app.get('/api/owners/getOwnerById', function (req, res) {
    let sql = "SELECT * FROM Owner WHERE id = ?;"
    connection.query(sql, [req.query.id], function (err, rows, fields) {
        if (err) {
            throw err;
        }

        if (rows.length === 0) {
            res.send({
                "message": "No record found!"
            })
        }
        else {
            res.send(rows);
        }
    })
});

/**
 * DELETE ALL OWNERS
 */
app.delete('/api/owners/', function (req, res) {
    let sql = "TRUNCATE TABLE Owner";
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err;
        res.send({
            "message ": "All Owners deleted!"
        })
    })
})

/**
 * DELETE OWNER BY ID
 */
app.delete('/api/owners/getOwnerById/:id', function (req, res) {
    let sql = "DELETE FROM Owner WHERE id = ?";
    connection.query(sql, [req.params.id], function (err, rows, fields) {
        if (err) throw err;
        res.send({
            "message": "Owner deleted!"
        })
    })
})

/**
 * CRUD API FOR SPACES TABLE
 */


/**
 * GET ALL SPACES
 */
app.get('/api/spaces', (req, res) => {

    let sql = "SELECT Spaces.id AS 'space_id', Spaces.name AS 'space_name', Spaces.address AS 'space_address', Spaces.price AS 'space_price', Spaces.start_time AS 'space_startTime', Spaces.end_time AS 'space_endTime', Spaces.no_of_hours AS 'space_noOfHours', Spaces.type AS 'space_type', Spaces.space_img, spaceType.name AS 'spaceType_name', Perk.id AS 'perk_id', Perk.wifi AS 'perk_wifi', Perk.ac AS 'perk_ac', Perk.freeSnacks AS 'perk_freeSnacks', Perk.canteen AS 'perk_canteen', Perk.plugPoint AS 'perk_plugPoint', Perk.powerBackup AS 'perk_powerBackup', Perk.projector AS 'perk_projector', Perk.printer AS 'perk_printer', Facilities.id AS 'facilities_id', Facilities.lift AS 'facilities_lift', Facilities.lockers AS 'facilities_locker', Facilities.parking AS 'facilities_parking', Facilities.washroom AS 'facilities_washroom', Owner.id AS 'owner_id', Owner.name AS 'owner_name', Owner.username AS 'owner_username', Owner.password AS 'owner_password', Owner.email AS 'owner_email', Owner.dob AS 'owner_dob', Owner.contact AS 'owner_contact', Owner.bio AS 'owner_bio' FROM Spaces LEFT JOIN Perk ON Spaces.id = Perk.spaceId LEFT JOIN Facilities ON Spaces.id = Facilities.spaceId LEFT JOIN Owner ON Spaces.owner_id = Owner.id LEFT JOIN spaceType ON Spaces.type = spaceType.id";
    connection.query(
        sql,
        (err, rows) => {
            if (err) {
                throw err
            }
            if (rows.length == 0) {
                res.send({ message: "No records found!" })
            }
            else {
                res.send(rows);
            }
        }
    )
})

/**
 * GET SPACE DETAILS BY ID
 */
app.get('/api/spaces/getBySpaceId/', (req, res) => {

    let sql = "SELECT Spaces.id AS 'space_id', Spaces.name AS 'space_name', Spaces.address AS 'space_address', Spaces.price AS 'space_price', Spaces.start_time AS 'space_startTime', Spaces.end_time AS 'space_endTime', Spaces.no_of_hours AS 'space_noOfHours', Spaces.type AS 'space_type', Spaces.space_img, spaceType.name AS 'spaceType_name', Perk.id AS 'perk_id', Perk.wifi AS 'perk_wifi', Perk.ac AS 'perk_ac', Perk.freeSnacks AS 'perk_freeSnacks', Perk.canteen AS 'perk_canteen', Perk.plugPoint AS 'perk_plugPoint', Perk.powerBackup AS 'perk_powerBackup', Perk.projector AS 'perk_projector', Perk.printer AS 'perk_printer', Facilities.id AS 'facilities_id', Facilities.lift AS 'facilities_lift', Facilities.lockers AS 'facilities_locker', Facilities.parking AS 'facilities_parking', Facilities.washroom AS 'facilities_washroom', Owner.id AS 'owner_id', Owner.name AS 'owner_name', Owner.username AS 'owner_username', Owner.password AS 'owner_password', Owner.email AS 'owner_email', Owner.dob AS 'owner_dob', Owner.contact AS 'owner_contact', Owner.bio AS 'owner_bio' FROM Spaces LEFT JOIN Perk ON Spaces.id = Perk.spaceId LEFT JOIN Facilities ON Spaces.id = Facilities.spaceId LEFT JOIN Owner ON Spaces.owner_id = Owner.id LEFT JOIN spaceType ON Spaces.type = spaceType.id WHERE Spaces.id = ?";

    connection.query(sql, [req.query.id], (err, rows, fields) => {
        if (err) {
            throw err;
        }
        if (rows.length === 0) {
            res.send({
                "message": "No records found!"
            });
        }
        else {
            res.send(rows);
        }
    })
})

/**
 * GET Space details and its average rating by space id
 */
app.get('/api/spaces/getAverageRatingBySpaceId', (req, res) => {
    const sql = "SELECT Spaces.*, AVG(Review.rating) AS 'AverageRating' From Spaces INNER JOIN Review ON Spaces.id = Review.space_id  WHERE Spaces.id = ?;"
    connection.query(
        sql,
        [req.query.id],
        (err, rows, fields) => {
            if (err) {
                throw err;
            }
            if (rows[0].id == null) {
                res.send({
                    message: "No records found!"
                })
            }
            else {
                res.send(rows);
            }
        }
    )
})

/**
 * GET SPACE DETAILS BY TYPE NAME
 */

app.get('/api/spaces/getByTypeName', (req, res) => {

    let sql = "SELECT Spaces.id AS 'space_id', Spaces.name AS 'space_name', Spaces.address AS 'space_address', Spaces.price AS 'space_price', Spaces.start_time AS 'space_startTime', Spaces.end_time AS 'space_endTime', Spaces.no_of_hours AS 'space_noOfHours', Spaces.type AS 'space_type', Spaces.space_img, spaceType.name AS 'spaceType_name', Perk.id AS 'perk_id', Perk.wifi AS 'perk_wifi', Perk.ac AS 'perk_ac', Perk.freeSnacks AS 'perk_freeSnacks', Perk.canteen AS 'perk_canteen', Perk.plugPoint AS 'perk_plugPoint', Perk.powerBackup AS 'perk_powerBackup', Perk.projector AS 'perk_projector', Perk.printer AS 'perk_printer', Facilities.id AS 'facilities_id', Facilities.lift AS 'facilities_lift', Facilities.lockers AS 'facilities_locker', Facilities.parking AS 'facilities_parking', Facilities.washroom AS 'facilities_washroom', Owner.id AS 'owner_id', Owner.name AS 'owner_name', Owner.username AS 'owner_username', Owner.password AS 'owner_password', Owner.email AS 'owner_email', Owner.dob AS 'owner_dob', Owner.contact AS 'owner_contact', Owner.bio AS 'owner_bio' FROM Spaces LEFT JOIN Perk ON Spaces.id = Perk.spaceId LEFT JOIN Facilities ON Spaces.id = Facilities.spaceId LEFT JOIN Owner ON Spaces.owner_id = Owner.id LEFT JOIN spaceType ON Spaces.type = spaceType.id WHERE spaceType.name = ?";
    connection.query(
        sql,
        [req.query.name],
        (err, rows) => {
            if (err) {
                throw err
            }
            if (rows.length == 0) {
                res.send({ message: "No records found!" })
            }
            else {
                res.send(rows);
            }
        }
    )
})

/**
 * GET ALL SPACES NAME AND ITS OWNER(S) DETAILS, PERKS DETAILS, FACILITIES DETAILS
 */
app.get('/api/spaces/getEveryDetail', (req, res) => {

    let sql = "SELECT Spaces.id AS 'space_id', Spaces.name AS 'space_name', Spaces.address AS 'space_address', Spaces.price AS 'space_price', Spaces.start_time AS 'space_startTime', Spaces.end_time AS 'space_endTime', Spaces.no_of_hours AS 'space_noOfHours', Spaces.type AS 'space_type', Spaces.space_img, spaceType.name AS 'spaceType_name', Perk.id AS 'perk_id', Perk.wifi AS 'perk_wifi', Perk.ac AS 'perk_ac', Perk.freeSnacks AS 'perk_freeSnacks', Perk.canteen AS 'perk_canteen', Perk.plugPoint AS 'perk_plugPoint', Perk.powerBackup AS 'perk_powerBackup', Perk.projector AS 'perk_projector', Perk.printer AS 'perk_printer', Facilities.id AS 'facilities_id', Facilities.lift AS 'facilities_lift', Facilities.lockers AS 'facilities_locker', Facilities.parking AS 'facilities_parking', Facilities.washroom AS 'facilities_washroom', Owner.id AS 'owner_id', Owner.name AS 'owner_name', Owner.username AS 'owner_username', Owner.password AS 'owner_password', Owner.email AS 'owner_email', Owner.dob AS 'owner_dob', Owner.contact AS 'owner_contact', Owner.bio AS 'owner_bio' FROM Spaces LEFT JOIN Perk ON Spaces.id = Perk.spaceId LEFT JOIN Facilities ON Spaces.id = Facilities.spaceId LEFT JOIN Owner ON Spaces.owner_id = Owner.id LEFT JOIN spaceType ON Spaces.type = spaceType.id;";
    connection.query(
        sql,
        (err, rows, fields) => {
            if (err) {
                throw err
            }
            if (rows.length == 0) {
                res.send({
                    message: "No records found!"
                })
            }
            else {
                res.send({
                    message: "Records found!",
                    data: rows
                })
            }
        }
    )
})

/**
 *  GET TOP 'N' HIGHEST RATED SPACE NAMES
 */
app.get('/api/spaces/getTopRatedSpaces/', (req, res) => {

    const sql = "SELECT Spaces.*, AVG(Review.rating) AS 'AverageRating' From Spaces INNER JOIN Review ON Spaces.id = Review.space_id  GROUP BY Spaces.id ORDER BY AVG(Review.Rating) DESC LIMIT ?";

    // let sql2 = "SELECT Spaces.*, Spaces.name AS 'space_name', Perk.*, Facilities.*, Owner.*, Owner.name AS owner_name, AVG(Review.rating) AS 'AverageRating', spaceType.name AS typeName FROM Spaces INNER JOIN spaceType ON Spaces.type=spaceType.id INNER JOIN Perk ON Spaces.id = Perk.spaceId INNER JOIN Facilities ON Spaces.id = Facilities.spaceId INNER JOIN Owner ON Spaces.owner_id = Owner.id INNER JOIN Review ON Spaces.id = Review.space_id GROUP BY Spaces.id ORDER BY AVG(Review.rating) DESC LIMIT ?;"


    connection.query(
        sql,
        [parseInt(req.query.limit)],
        (err, rows) => {
            if (err) {
                throw err;
            }
            if (rows.length == 0) {
                res.send({
                    message: "No records found!"
                })
            }
            else {
                res.send(rows);
            }
        }
    )
})

/**
 * CREATE A SPACE
 */
app.post('/api/spaces/create', (req, res) => {
    let sql = "INSERT INTO Spaces(name, type, price, address, no_of_hours, start_time, end_time, no_of_slots, owner_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";

    connection.query(
        sql,
        [
            req.body.name,
            // parseInt(req.body.type),
            req.body.type,
            req.body.price,
            // parseFloat(req.body.price),
            req.body.address,
            // parseInt(req.body.no_of_hours),
            req.body.no_of_hours,
            req.body.start_time,
            req.body.end_time,
            // parseInt(req.body.no_of_slots),
            req.body.no_of_slots,
            // parseInt(req.body.owner_id),
            req.body.owner_id
        ],
        (err, rows) => {
            if (err) {
                res.send({ err: err });
            } else {
                let sql = "SELECT LAST_INSERT_ID() AS lastSpaceId;"
                connection.query(
                    sql,
                    function (err, idd) {
                        if (err) {
                            res.send({ err: err })
                        } else {
                            res.send(idd)
                        }
                    }
                )
            }
        })
})

/**
 * CRUD API FOR SPACE TYPE TABLE
 */


// GET ALL SPACETYPES
app.get('/api/spaceTypes', (req, res) => {
    connection.query(
        "SELECT * FROM spaceType",
        (err, rows, fields) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        }
    );
})

// GET SPACETYPE BY ID
app.get('/api/spaceTypes/getById', (req, res) => {

    const sql = "SELECT * FROM spaceType where id = ?;";
    connection.query(
        sql,
        [req.query.id],
        (err, rows) => {
            if (err) {
                throw err
            }
            if (rows.length == 0) {
                res.send({
                    message: "No records found!"
                })
            }
            else {
                res.send(rows);
            }
        }
    )
})

/**
 * GET API BY space_id FOR REVIEW-USER DETAILS
 */
app.get("/api/reviews/getBySpaceId", (req, res) => {
    const sql = "SELECT Review.id as review_id, Review.space_id, Review.rating, Review.description, User.* FROM Review INNER JOIN User ON Review.user_id = User.id WHERE Review.space_id = ?";
    const data = [req.query.space_id];
    connection.query(sql, data, (err, results) => {
        if (err) {
            res.send({ err: err })
        }
        if (results.length > 0) {
            res.send({ data: results, message: "Record(s) found!" });
        }
        else {
            res.send({ data: results, message: "No record(s) found!" })
        }
    })
})

/**
 * POST API FOR BOOKING TABLE 
 */
app.post("/api/booking", (req, res) => {
    const sql = "INSERT INTO Booking(user_id, space_id, hour_duration, total_price) VALUES(?, ?, ?, ?)";

    const userId = parseInt(req.body.user_id);
    const spaceId = parseInt(req.body.space_id);
    const hourDuration = parseInt(req.body.hour_duration);
    const pricePerHour = parseInt(req.body.price_per_hour);
    const totalPrice = hourDuration * pricePerHour;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "lucifer98.test@gmail.com",
            pass: "gvdmsekqskaghirz"
        }
    });

    console.log(req.body.org_email);
    console.log(req.body.email);
    const mailOptions = {
        from: req.body.email,
        to: req.body.org_email,
        subject: "Coworking space booking details",
        html: `
        <div style="
        border:1px solid black; 
        padding:30px;
        line-height: 2;
        font-size: 20px;
        text-align: center;
        ">
        <h2>Here are your Billing Details!</h2>
        <p>We thank you for using our service and wish you a nice and comforting experience!</p>
        <span>&#128591;</span>
        <table style="width:100%">
            <tr>
            <td>User Name: </td><td>${req.body.user_name}</td>
            </tr>
            <tr>
            <td>Space: </td><td>${req.body.space_name}</td>
            </tr>
            <tr>
            <td>Location: </td><td>${req.body.space_address}</td>
            </tr>
            <tr>
            <td>Hour(s) booked: </td><td>${req.body.hour_duration}</td>
            </tr>
            <tr>
            <td>Charge: </td><td> Rs ${req.body.price_per_hour} /hr</td>
            </tr>
            <tr>
            <td>Total: </td><td> Rs ${totalPrice}</td>
            </tr>
            <tr>
            <td>GST: (18% of ${totalPrice})</td><td> Rs ${0.18 * totalPrice}</td>
            </tr>
            <tr>
            <td>Grand total: </td><td> Rs ${1.18 * totalPrice}</td>
            </tr>
        </table>
        </div>
        
        `
    }



    connection.query(sql, [userId, spaceId, hourDuration, totalPrice], (err, results) => {
        if (!userId) {
            res.send({
                message: "Invalid userId"
            })
            return;
        }
        if (err) {
            res.send(err);
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
            console.log("Email sent: " + info.response);
        });

        console.log(req.body.org_email);

        res.send({
            message: "Booking successful!",
            data: results,
            status: true
        })
    })
})



/**
 * create a review
 */
app.post("/api/reviews/create", function (req, res) {
    const sql = "INSERT INTO `Review` (`space_id`, `rating`, `description`, `user_id`) VALUES (?, ?, ?, ?)"
    connection.query(
        sql,
        [req.body.space_id, req.body.rating, req.body.description, req.body.user_id],
        function (err, results) {
            if (err) {
                res.send({ err: err })
            }
            else {
                res.send({
                    message: "Review created!"
                })
            }
        }
    )
})

/**
 * create a perk
 */
app.post("/api/perks/create", function (req, res) {
    const sql = "INSERT INTO `Perk` (`spaceId`, `wifi`, `ac`, `freeSnacks`, `canteen`, `plugPoint`, `printer`, `powerBackup`, `projector`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    connection.query(
        sql,
        [
            req.body.space_id,
            req.body.wifi,
            req.body.ac,
            req.body.freeSnacks,
            req.body.canteen,
            req.body.plugPoint,
            req.body.printer,
            req.body.powerBackup,
            req.body.projector
        ],
        function (err, results) {
            if (err) {
                res.send({ err: err })
            }
            else {
                res.send({
                    message: "Perk created!"
                })
            }
        }
    )
})

/**
 * create facilities api
 */
app.post("/api/facilities/create", function (req, res) {
    const sql = "INSERT INTO Facilities(spaceId, washroom, parking, lift, lockers) VALUES(?, ?, ?, ?, ?);"
    connection.query(
        sql,
        [
            req.body.spaceId,
            req.body.washroom,
            req.body.parking,
            req.body.lift,
            req.body.lockers,
        ],
        function (err, results) {
            if (err) {
                res.send({
                    err: err
                })
            }
            else {
                res.send({
                    message: "Facility created!"
                })
            }
        }
    )
})

/**
 * get space details by ownerId
 */
app.get("/api/owner/getSpaceDetails", function (req, res) {

    const sql = "SELECT  Spaces.id AS 'space_id', Spaces.name AS 'space_name', Spaces.address AS 'space_address',  Spaces.start_time AS 'space_startTime',Spaces.end_time AS 'space_endTime', Spaces.price AS 'space_price', spaceType.name AS 'spaceType_name' FROM Spaces LEFT JOIN Owner ON Spaces.owner_id = Owner.id LEFT JOIN spaceType ON Spaces.type = spaceType.id WHERE Owner.id = ?"

    connection.query(sql, [req.query.id], function (err, results) {
        if (err) {
            res.send({
                err: err
            })
        }
        if (results.length == 0) {
            res.send({
                message: "No records found!",
                results: results
            })
        }
        else {
            res.send({
                message: "Records found!",
                results: results
            })
        }
    })
})

/**
 * get booking detail by ownerId
 */
app.get("/api/owner/getBookingDetails", function (req, res) {

    const sql = "SELECT Spaces.name AS 'space_name', User.name AS 'user_name', Booking.hour_duration AS 'booking_hourDuration', Booking.total_price AS 'booking_totalPrice', Booking.timestamp AS 'booking_timestamp' FROM Booking LEFT JOIN Spaces ON Booking.space_id = Spaces.id LEFT JOIN User ON Booking.user_id = User.id LEFT JOIN Owner ON Spaces.owner_id = Owner.id WHERE Owner.id = ?  ORDER BY Booking.timestamp DESC"

    connection.query(sql, [req.query.id], function (err, results) {
        if (err) {
            res.send({
                err: err
            })
        }
        if (results.length == 0) {
            res.send({
                message: "No records found!",
                results: results
            })
        }
        else {
            res.send({
                message: "Records found!",
                results: results
            })
        }
    })
})

app.listen(port, function () {
    console.log('App Listening on port ' + port);
    connection.connect(function (err) {
        if (err) throw err;
        console.log('Database connected!');
    })
});