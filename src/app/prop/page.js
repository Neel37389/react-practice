import { PersonCard } from "@/components/PersonCard";

export default function Home() {
  const people = [
    { id: 1, name: "Neel", age: 23 },
    { id: 2, name: "John", age: 25 },
    { id: 3, name: "Sarah", age: 22 },
  ];

  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          <PersonCard age={person.age} name={person.name} />
        </div>
      ))}
    </div>
  );
}
