import axios from "axios";

const URL = "http://localhost:8000/tra_profile";
class service {
  getText() {
    return axios.get(URL);
  }
  createText(text) {
    return axios.post(URL, text);
  }
  deleteText(id) {
    return axios.delete(URL + "/" + id);
  }
  updateText(Item, ItemId) {
    return axios.put(URL + "/" + ItemId, Item);
  }
}
export default new service();