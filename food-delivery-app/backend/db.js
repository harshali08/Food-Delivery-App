// const mongoose = require('mongoose');
// const mongoURL = "mongodb+srv://harshali:harshu123@cluster0.tzzjvvn.mongodb.net/?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURL,{useNewUrlParser:true});
//     console.log("Connected to MongoDB");
//     const fetched_data=await mongoose.connection.db.collection("foods");
//     fetched_data.find({}).toArray(function(err,data){
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(data)
//         }
//     })
//   } catch (error) {
//     console.error('Error connecting to MongoDB: ' + error);
//   }
// };

// module.exports = mongoDB;

const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://harshali:harshu123@cluster0.tzzjvvn.mongodb.net/foodinfo?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
    const fetched_data = await mongoose.connection.db.collection("foods");
    const data = await fetched_data.find().toArray();
    console.log(data);
  } catch (error) {
    console.error('Error connecting to MongoDB: ' + error);
  }
};

module.exports = mongoDB;

