export default function Home() {
  const submitCombination = async (formData: FormData) => {
    "use server";

    const rawFormData = {
      actual_combination: formData.get("combination"),
    };

    const res = await fetch("http://127.0.0.1:5000/api/crack_safe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    const data = await res.json();
    const attempts = data.attempts;
    const time_taken = data.time_taken;

    console.log(attempts, time_taken);
  };

  return (
    <main className="">
      <h1>Forml OA</h1>
      <div>
        <form action={submitCombination}>
          <input name="combination" placeholder="Combination" />
          <button>Submit</button>
        </form>
      </div>
    </main>
  );
}
