function Table({month,data}){
    return (
      <div>
        <h1 style={{"color":"white"}}>{month}</h1>
        <table> 
        <tr>
          <th>Name</th>
          <th>Date</th>
        </tr>
        
        {data.map((user) => {
          return (
            <>
            <tr>
            <td>{user.name}</td>
            <td>{user.date}</td>
            </tr>
            </>
          );
        })}
      </table>
      </div>
    )
}

export default Table;