// import 'bootstrap/dist/css/bootstrap.min.css';

let dd = "";
let sir = "";

function getSir(e){
    sir = e.target.value;
}

function getDate(date) {
    dd = date.target.value;
}

function submitValues(e){
    e.preventDefault();
    console.log(sir,dd);

}

function Payment() {
  return (
    <div className="main-form">
        <h3>Monthly payment manager</h3>
        <select onChange={getSir}>
          <option name="Bashar sir" id="1">
            Bashar sir
          </option>
          <option name="Sohel sir" id="2">
            Sohel sir
          </option>
          <option name="Alif sir" id="3">
            Alif sir
          </option>
        </select>
        <input type="date" id="tutiontime" name="tutiontime" onChange={getDate}></input>
        <br />
        <button type="submit" onClick={submitValues}>Tution Paid</button>
    </div>
  );
}

export default Payment;
