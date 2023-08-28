require('dotenv').config()
const{ inicializeApp, applicationDefault} = require('firebase-admin/app')
const {getFirestore} = require ('firebase-admin/firestore')

inicializeApp({
    credential: applicationDefault()
})

const db = getFirestore()

module.exports = {
    db
}
