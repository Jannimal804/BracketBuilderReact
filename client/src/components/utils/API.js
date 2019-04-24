import axios from "axios";

// create function to call api and export. import in register component

export default {
    getOneCompetitor: function(email){
        return axios.get("/api/competitor/" + email);
    },
    updateCompetitor: function(id, data){
        return axios.put("/api/competitor/"+id, data)
    },
    getRemote: function(){
        return axios.get("/api/remote/");
    }
}