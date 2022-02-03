export default async function loginUser(credentials) {
  return fetch("http://localhost:9010/pj-service/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
