import axios from "axios";


export default {
  // Gets all items
  getLibrary: function() {
    return axios.get("/api/library");
  },
  // Gets the image/pdf/text with the given id
  getItem: function(id) {
    return axios.get("/api/library/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/library/" + id);
  },
  // Saves an item to the database
  saveItem: function(itemData) {
    return axios.post("/api/library", itemData);
  }
};
