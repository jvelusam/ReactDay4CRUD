import { Container, Table } from "reactstrap";

const userTable = ({ tableHeaders, userData }) => {
   return( <Container>

        <Table stripped>

            <thead>
                <tr>
                    {
                            tableHeaders.map((value, index) =>
                        {
                            return <th key={index}>{value}</th>;

                        })}
                </tr>
            </thead>
             <tbody>
                {
userData.map((value,index)=>

{
return (
 <tr>
   
    <td>{index + 1}</td>
                  <td>{value.username}</td>
                  <td>{value.email}</td>
                  <td>{value.mobileNumber}</td>
                  <td>{value.age}</td>
 </tr>

)

})

                }
                
                
                
            </tbody>           
        </Table>
    </Container>
   );

}


export default userTable;