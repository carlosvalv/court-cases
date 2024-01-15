import { useEffect, useState } from "react";
import { Case } from "../types/case";
import { Button, Snackbar, TextField } from "@mui/material";
import { AddStep } from "../enums/case";
import styled from "@emotion/styled";
import { DatePicker } from "@mui/x-date-pickers";
import SelectFinished from "../components/SelectFinished";
import { useDispatch } from "react-redux";
import { addCase } from "../redux/states/case";
import { dateToStringFormat } from "../utilities/dates";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const LayoutForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

function AddCase() {
  const [newCase, setNewCase] = useState<Case>({ id: uuidv4() });
  const [step, setStep] = useState<AddStep>(AddStep.NAME);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (step !== AddStep.SAVE) return;
    //call api post here
    dispatch(addCase(newCase));
    setNewCase({ id: uuidv4() });
    setStep(AddStep.NAME);
    setOpenSnackbar(true);
  }, [step, dispatch, newCase]);

  const renderInput = () => {
    switch (step) {
      default:
      case AddStep.NAME:
        return (
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewCase({ ...newCase, customerName: e.target.value })
            }
          />
        );
      case AddStep.DATE:
        return (
          <DatePicker
            label="Date"
            onChange={(value: any) =>
              setNewCase({
                ...newCase,
                startDate: dateToStringFormat(value.$d),
              })
            }
          />
        );
      case AddStep.IS_FINISHED:
        return (
          <SelectFinished
            onChange={(isFinished: boolean) =>
              setNewCase({
                ...newCase,
                isFinished: isFinished,
              })
            }
          />
        );
    }
  };

  const renderSubtitle = () => {
    switch (step) {
      default:
      case AddStep.NAME:
        return "Indicate the customer's name from this case:";
      case AddStep.DATE:
        return "Select the start date from the case:";
      case AddStep.IS_FINISHED:
        return "Indicate if the case is already finished:";
    }
  };

  const nextStep = () => {
    switch (step) {
      default:
      case AddStep.NAME:
        setStep(AddStep.DATE);
        break;
      case AddStep.DATE:
        setStep(AddStep.IS_FINISHED);
        break;
      case AddStep.IS_FINISHED:
        setStep(AddStep.SAVE);
        break;
    }
  };

  const checkDisabled = () => {
    switch (step) {
      default:
      case AddStep.NAME:
        return !newCase.customerName;
      case AddStep.DATE:
        return !newCase.startDate;
      case AddStep.IS_FINISHED:
        return newCase.isFinished === undefined;
      case AddStep.SAVE:
        return true;
    }
  };

  const btnText = () => {
    switch (step) {
      default:
      case AddStep.NAME:
      case AddStep.DATE:
        return "Next step";
      case AddStep.IS_FINISHED:
        return "Send";
    }
  };

  return (
    <Container>
      <h1>Add a new court case to the system</h1>
      <LayoutForm>
        <h2>{renderSubtitle()}</h2>
        {renderInput()}
      </LayoutForm>
      <Button onClick={nextStep} variant="outlined" disabled={checkDisabled()}>
        {btnText()}
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={()=>{setOpenSnackbar(false)}}
        message="Case added!"
      />
    </Container>
  );
}

export default AddCase;
