import axios from "axios";
const bountyUrl = "http://localhost:8222/bounties/";

export function loadBounties() {
  return dispatch => {
    axios.get(bountyUrl).then(res => {
      dispatch({
        type: "LOAD_BOUNTIES",
        bounties: res.data
      });
    });
  }
}

export function addBounty(bounty) {
  return dispatch => {
    axios.post(bountyUrl, bounty).then(res => {
      dispatch({
        type: "ADD_BOUNTY",
        bounty
      });
    });
  }
}

export function deleteBounty(id) {
    return dispatch => {
        axios.delete(bountiesUrl + id).then(res => {
            dispatch({
                type: "DELETE_BOUNTY",
                id
            });
        });
    };
}

export function editBounty(id, editedBounty) {
    return dispatch => {
        axios.put(bountiesUrl + id, editedBounty).then(res => {
            dispatch({
                type: "EDIT_BOUNTY",
                editedBounty: res.data,
                id
            });
        });
    };
}
