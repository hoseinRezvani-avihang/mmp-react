import { MemberList } from "./member-list/MemberList";
import { memberInfoList as memberList } from "../../models/members.model";
import { useEffect, useState } from "react";

export function Members() {
  const [members, setMembers] = useState();
  const [size, setSize] = useState(10);

  useEffect(() => {
    if (memberList) {
        let members = memberList.map((member) => {
            return ({
                id: member.ID,
                name: `${member.NAME} ${member.LASTNAME}`,
                birthDate: member.BIRTHDATE,
                phoneNumber: member.CELLPHONENUMBER, 
                nationalNumber: member.NATIONALNUMBER, 
                image: member.MEMBERIMAGE,
                insuranceType: member.PRODUCTNAME
            })
        }).filter((member) => {
            return member.image;
        }).slice(0, size);
        setMembers(members)
    }
  }, [memberList, size])

  function loadMore() {
    setSize(size + 10)
  }

  const phoneChangeHandler = (phoneNumber, id) => {
    let foundedMemnberIndex = members.findIndex(member => {
        return member.id == id;
    });

    if (foundedMemnberIndex > -1) {
        members[foundedMemnberIndex].phoneNumber = phoneNumber;
        setMembers(members)
    }
  }

  return (
    <>
    <div className="col-9 mx-auto">
      {members && <MemberList members={members} phoneChange={phoneChangeHandler}></MemberList> }
      <div className="mt-3"><button onClick={loadMore} className="btn btn-outline-primary rounded-circle more-button">
        یبشتر</button></div>
    </div>
    </>
  );
}
