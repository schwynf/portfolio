import axios from "axios";

export default {
  getEmails: function() {
    return axios.get("/api/emails");
  },
  deleteEmail: function(id) {
    return axios.delete("/api/email/" + id);
  },
  saveEmail: function(emailData) {
    return axios.post("/api/email", emailData);
  }
};