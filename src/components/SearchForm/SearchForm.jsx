import { useEffect, useRef, useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const API_KEY = "dc2aedd2b98affe3cb1bd3a0d9a6d78e";
  let type = "movie";
  let search = ""; //поисковая строка
  let initialRender = useRef(true); //Будем проверять первая ли это загрузка страницы, что бы не улетал пустой запрос с useEffect
  const [films, setFilms] = useState([]); // Массив фильмов будем передавать от ребенка к отцу, я уже нашел как, но сейчас главное скинуть на проверку форму поиска

  const [query, setQuery] = useState(""); //строка всего запроса

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      const requestFilms = async () => {
        const response = await fetch(query);
        const data = await response.json();
        console.log(data);
        setFilms(data);
      };
      requestFilms();
    }
  }, [query]);
  return (
    <form>
      <input type="text" />
      <div>
        <label htmlFor="tv">
          TV shows
          <input type="radio" name="type" id="tv" value="tv" />
        </label>
        <label htmlFor="movie">
          Movie
          <input type="radio" name="type" id="movie" value="movie" />
        </label>
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          search = document.forms[0].elements[0].value;
          type = document.querySelector('input[name="type"]:checked').value;
          setQuery(
            `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${search}`
          );
        }}
      >
        Search
      </button>
      <div>{type}</div>
    </form>
  );
};

export default SearchForm;
