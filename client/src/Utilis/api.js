import axios from "axios";

const params={
    headers:{
        Authorization:"bearer " + process.env.REACT_APP_STRIP_APP_KEY 
    },
};

 export const fetchdataApi = async (url) =>{
    try{
    const {} =await axios.get()
    }
    catch{
        console.log(error);
        return error;
    }
}