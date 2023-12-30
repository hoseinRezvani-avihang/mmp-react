import { MemberItem } from "./member-item/MemberItem";

export function MemberList({ members, phoneChange }) {
  return (
    <>
      <div className="d-flex flex-column gap-2">
        {members.map((member, index) => {
          return <MemberItem key={index} member={member} phoneChange={phoneChange}></MemberItem>;
        })}
      </div>
    </>
  );
}
