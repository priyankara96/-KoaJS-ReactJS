import axios from "axios";

const URL = "http://localhost:8000/addProduct";
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
  updateItem(Item, ItemId) {
    return axios.put(URL + "/" + ItemId, Item);
  }
}
export default new service();

