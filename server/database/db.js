import mongoose from 'mongoose';
const DBConnection =async () => {
    const MONODB_URI=`mongodb://aditya:I5YxVZYJUiqWQkon@ac-rwrw0ob-shard-00-00.lniihyl.mongodb.net:27017,ac-rwrw0ob-shard-00-01.lniihyl.mongodb.net:27017,ac-rwrw0ob-shard-00-02.lniihyl.mongodb.net:27017/?ssl=true&replicaSet=atlas-s1pvcu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-sharing`;
    try{
        await mongoose.connect(MONODB_URI, {useNewUrlParser: true});
        console.log('database connected');
    }
    catch(error){
        console.error('error while connecting the database', error.message);
    }
}

export default DBConnection;