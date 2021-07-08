const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWQzZDcyMWI5NjUyNGU1NDMzNjFjOWQ3ZDVlNGJjOSIsInN1YiI6IjYwZGY1YzViYjY4NmI5MDA3NWY3MTkzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uaAHf_fp2YtiqHhORXdQMPcUWTHLF_LEt8klGAUKtJc",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((result) => result.json())
}