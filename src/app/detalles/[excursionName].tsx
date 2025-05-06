import { useRouter } from "next/router";

export default function TravelDetails() {
  const router = useRouter();
  const { excursionName } = router.query;

  return (
    <main>
      <h1>{excursionName} details page</h1>
    </main>
  );
}
