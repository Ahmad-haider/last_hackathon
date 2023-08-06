const express = require('express')
const mongoose = require('mongoose');


async function connection() {
    try {
    

    


     const connection =  await mongoose.connect('mongodb+srv://ahmadhaider4772:ahmad@cluster1.wvelsun.mongodb.net/fashion_store',)
       console.log("connection successful");
    } catch (error) {
      console.log(
        "connection error" ,error
      );
    }

   
  
  }

   

//   module.export = dbConnection

  module.exports = {
    connection
  }