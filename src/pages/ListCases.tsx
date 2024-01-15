import styled from "@emotion/styled";
import TableCases from "../components/TableCases";
import BtnUploadFile from "../components/BtnUploadFile";

const Container = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

function ListCases() {
  return (
    <Container>
      <h1>All cases: </h1>
      <BtnUploadFile />
      <TableCases />
    </Container>
  );
}

export default ListCases;
