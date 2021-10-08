export function fetchAccounts(){
  const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const thirtyMinutes = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < thirtyMinutes) {
      return localStorage.getItem("token");
    }
  }
  return (dispatch) => {
    fetch("http://localhost:3001/current_user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: getToken()
      }
    })
    .then(response => response.json())
    .then((data) => {
      if (data !== null){
        const id = data.id
        return fetch(`http://localhost:3001/users/${id}/accounts`)
        .then(response => response.json())
        .then(accounts => {
          dispatch({
              type: "FETCH_ACCOUNTS",
              payload: accounts
            })
          })
      } else{
        console.log(data)
      }
    })
  }
}
