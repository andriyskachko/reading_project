export default async function HomePage() {
  const res = await fetch("http://localhost:8080/health");
  const data = await res.json();

  return (
    <div>
      Home:
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
