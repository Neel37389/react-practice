export const PersonCard = ({ age, name }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p className={age < 23 ? "text-green-500" : "text-blue-500"}>
        {age < 23 ? "Junior" : "Senior"}
      </p>
    </div>
  );
};
