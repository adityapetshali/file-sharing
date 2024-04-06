import mongoose from 'mongoose';
const DBConnection =async () => {
    const MONODB_URI=`mongodb://aditya:aCB1VVBwUJ2K1Apr@ac-6bhtyha-shard-00-00.ryoeovz.mongodb.net:27017,ac-6bhtyha-shard-00-01.ryoeovz.mongodb.net:27017,ac-6bhtyha-shard-00-02.ryoeovz.mongodb.net:27017/?ssl=true&replicaSet=atlas-v8h21g-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-sharing`;
    try{
        await mongoose.connect(MONODB_URI, {useNewUrlParser: true});
        console.log('database connected');
    }
    catch(error){
        console.error('error while connecting the database', error.message);
    }
}

export default DBConnection;