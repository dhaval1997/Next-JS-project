import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const DeveloperPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const developer = details.find((dev) => dev.id === parseInt(id, 10));

  if (!developer) return <p>Developer doesn't exist</p>;

  return (
    <main>
      <p>{developer.name}</p>
      <p>{developer.role}</p>
    </main>
  );
};
export default DeveloperPage;
