"use server";

type FormState = {
  attempts: number;
  time_taken: number;
};

export const submitCombination = async (
  prevState: FormState,
  formData: FormData
) => {
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

  const body = {
    attempts: attempts,
    time_taken: time_taken,
  };
  console.log(body);
  return body;
};
