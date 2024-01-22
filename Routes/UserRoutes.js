const express = require("express");
const UserController = require("../Controller/UserController");
const validation = require("../Middleware/validation");
const UserRoutes = express.Router();



/**
 * @swagger
 *  components:
 *    schemas:
 *      signUp:
 *        type: object
 *        required:
 *          - Fname
 *          - lname
 *          - Gender
 *          - Contact_Number
 *          - Address
 *          - Email
 *          - Password
 *        properties:
 *          Fname:
 *           type: string
 *           description: User's First name
 *          Lname:
 *           type: string
 *           description: User's Last Name
 *          Gender:
 *           type: string
 *           description: User's gender
 *          Contact_Number:
 *           type: integer
 *           description: User's contact number
 *          Address:
 *           type: string
 *           description: User's Address
 *          Email:
 *           type: string
 *           format: email
 *           description: User's email
 *          Password:
 *           type: string
 *           description: User's password
 *         
 */

/**
 * @swagger
 * tags:
 *     name: User
 *     description: The user managing API endpoint
 */

/**
 * @swagger
 * /api/User/signUp:
 *   post:
 *     summary: Create new user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/signUp'    
 *     responses:
 *       200:
 *         description: Created User successfully
 *       500:
 *         description: Some Server Error
 */
UserRoutes.get('/signup',UserController.signup)
UserRoutes.post('/signUp',UserController.createUser)


/**
 * @swagger
 *  components:
 *    schemas:
 *      login:
 *        type: object
 *        required:
 *          - Email
 *          - Password
 *        properties:
 *          Email:
 *           type: string
 *           format: email
 *           description: User's email
 *          Password:
 *           type: string
 *           description: User's password
 *         
 */



/**
 * @swagger
 * /api/User/login:
 *   post:
 *     summary: Create new user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'    
 *     responses:
 *       200:
 *         description: Created User successfully
 *       500:
 *         description: Some Server Error
*/
 UserRoutes.get('/login',UserController.Login)
UserRoutes.post('/login',UserController.UserLogin);

 /**
 * @swagger
 * /api/User/register:
 *  get:
 *     summary: Returns the list of all the post
 *     tags: [User]
 *     security:
 *	     - jwt: []
 *     responses:
 *      200:
 *          description: The list of the post
 */

 UserRoutes.get('/register',UserController.register)

module.exports = UserRoutes;