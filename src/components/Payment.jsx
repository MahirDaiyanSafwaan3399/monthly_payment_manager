// import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Table from "./Table"

let dd = "";
let sir = "";

const user = collection(db, "Payment Paid");

function Payment() {

  const [users, setUsers] = useState([]);
  async function submitValues(e) {
    e.preventDefault();
    await addDoc(user, { name: sir, date: dd });
    const data = await getDocs(user);
    setUsers(data.docs.map((doc) => ({ ...doc.data() })));
    alert(sir +" payment done");
  }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(user);
      setUsers(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  }, []);
  return (
    <div>
      <div className="main-form">
        <h3>Monthly payment manager</h3>
        <select onChange={(e)=>{sir = e.target.value}}>
          <option name="Bashar sir" id="1">
            Bashar sir
          </option>
          <option name="Sohel sir" id="2">
            Sohel sir
          </option>
          <option name="Alif sir" id="3">
            Alif sir
          </option>
          <option name="honuman sir" id="4">
            honuman
          </option>
        </select>
        <input
          type="date"
          id="tutiontime"
          name="tutiontime"
          onChange={(date)=>{dd = date.target.value}}
        ></input>
        <br />
        <button type="submit" onClick={submitValues}>
          Tution Paid
        </button>
      </div>
      <center>
        <Table month={"July"} data={users}/>
        <Table month={"August"} data ={users}/>
        
      </center>
    </div>
  );
}

export default Payment;
