import styles from "@/app/styles/common.module.css";
import MovieCard from "../Components/MovieCard";
const movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a098abb285msh875475fe0eadfc7p13d042jsnd2d4d19add75",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data =await data.titles;
  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movies</h1>
        <div className={styles.card_section}>
          {
          main_data.slice(0,20).map((currElem) => {
            return <MovieCard key={currElem.id} {...currElem} />;
          })
          }
        </div>
      </div>
    </section>
  );
};

export default movie;
