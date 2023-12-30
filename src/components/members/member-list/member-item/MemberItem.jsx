import { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";

export function MemberItem({ member, phoneChange }) {
  const [editingPhone, setEditingPhone] = useState(false);
  let phoneNumber = "";

  let phoneElement = (
    <span dir="ltr" className="text-muted">
      {member.phoneNumber}
    </span>
  );
  if (editingPhone) {
    phoneElement = (
      <>
        <TextField
          defaultValue={member.phoneNumber}
          onChange={onChangeHandler}
          variant="standard"
          style={{'fontFamily': 'vazir'}}
        />
      </>
    );
  }

  let editIcon = editingPhone ? (
    <>
      <DoneIcon className="text-success" onClick={editHandler}></DoneIcon>
      <CloseIcon
        className="text-danger"
        onClick={() => {
          setEditingPhone(false);
        }}
      ></CloseIcon>
    </>
  ) : (
    <ModeEditIcon className="text-muted" onClick={editHandler}></ModeEditIcon>
  );

  function editHandler() {
    setEditingPhone(editingPhone => !editingPhone);

    if (editingPhone) {
      phoneChange(phoneNumber, member.id);
    }
  }

  function onChangeHandler(event) {
    phoneNumber = event.target.value;
  }

  return (
    <>
      <div className="member-item d-flex gap-4 border px-4 rounded py-3">
        <div className="image d-flex justify-content-center align-items-center">
          <img
            src={member.image}
            className="rounded-circle w-100 d-block image"
            alt=""
          />
        </div>
        <div className="member-info d-flex flex-column justify-content-around gap-2">
          <p className="m-0">
            <span className="fw-bold">{member.name}</span>
            <span>&nbsp;</span>
            <span className="text-muted">[ {member.nationalNumber} ]</span>
          </p>
          <p className="m-0">
            <span className="fw-bold">تاریخ تولد: </span>
            <span className="text-muted" dir="ltr">
              {member.birthDate}
            </span>
          </p>
          <div className="m-0">
            <span className="fw-bold">شماره تلفن همراه: </span>
            {phoneElement}
            {editIcon}
          </div>
        </div>
        <div className="me-auto">
          <p className="m-0">
            <span className="fw-bold">نوع پوشش بیمه‌ای: </span>
            <span>&nbsp;</span>
            <span className="text-muted">{member.insuranceType}</span>
          </p>
        </div>
      </div>
    </>
  );
}
