import { useEffect , useState} from "react";
import { Container } from "reactstrap";

import UserTable from "./UserTable";

let tableHeaders = ["S.NO","UserName","Email","MobileNumber","Age"];

export default function App() 
{

  const [userData, setUserData] = useState([]);
  useEffect(()=>
  {
    fetch("https://6428e084ebb1476fcc3f89be.mockapi.io/users")
    .then((data) => data.json())
    .then((res) => setUserData(res));
  }, []);
  return (
  <Container>

  <UserTable userData={userData} tableHeaders={tableHeaders} />

  </Container>
  );
}

