const API = "https://api.themoviedb.org/3";

export function get(path) {
  console.log(API + path);
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTE0NTRiNmFjNGZlYTQ1YTEwZjI4ODczNTY2NjQwMCIsInN1YiI6IjYxMjE3ZmY4ZWMzNzBjMDA3YzNiNDNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVfw3odaN38k2wx4JnpQ45ae-j2nK6ZOvJmpX0MPGQ8",
      "Content-type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
