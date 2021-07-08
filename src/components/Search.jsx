import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  //Estados
  const [searchText, setSearchText] = useState("");

  //hooks
  const history = useHistory();

  //hooks para cambiar el estado de la busqueda
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  //Funcion para poder detener la recarga de pagina que me hace el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
