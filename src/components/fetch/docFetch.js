import store from "../../store/store";
import { setResultDoc } from "../../store/types";

export async function docFetch (array){
      

    const token = store.getState().authenticated.accessToken;
    await fetch('https://gateway.scan-interfax.ru/api/v1/documents', {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'} ,
            body: JSON.stringify({
              ids: array
            })
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);

              store.dispatch(setResultDoc(data));
          })
  }