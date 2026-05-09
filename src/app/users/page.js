export default async function UserPage() {
  const resposne = await fetch("http://localhost:3000/api/users");
  const users = await resposne.json();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}
