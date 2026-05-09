export async function GET() {
  const users = [
    { id: 1, name: "Neel", role: "Developer" },
    { id: 2, name: "John", role: "Designer" },
    { id: 3, name: "Sarah", role: "Manager" },
  ];

  return Response.json(users);
}
