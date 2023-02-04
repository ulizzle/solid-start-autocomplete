import { createEffect, createSignal } from "solid-js";
import styles from "./styles";
import { ToDo } from "../../routes/index";

const AutoComplete = (props: { results: ToDo[] }) => {
  const [query, setQuery] = createSignal("");
  const [filteredResults, setFilteredResults] = createSignal<ToDo[]>([]);
  const { results } = props;

  createEffect(() => {
    if (!results) return;
    setFilteredResults(
      results.filter((result) => {
        return result.title.toLowerCase().includes(query().toLowerCase());
      })
    );
  });

  return (
    <div id="AutoComplete">
      <AutoCompleteSearchForm
        onSearch={(value) => {
          setQuery(value);
        }}
      />
      {query() && (
        <ul class="mx-auto max-w-xl">
          {filteredResults() &&
            filteredResults().map((result: ToDo) => () => (
              <li class={styles.resultsListItem}>{result.title}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

const AutoCompleteSearchForm = (props: AutoCompleteSearchFormProps) => {
  const [searchTerm, setSearchTerm] = createSignal("");
  const { onSearch } = props;
  createEffect(() => {
    onSearch(searchTerm());
  });
  return (
    <form class={styles.form}>
      <header class={styles.formHeader}>Search</header>
      <div class="flex flex-auto">
        <input
          type="text"
          onInput={(e) => setSearchTerm(e.currentTarget.value)}
          value={searchTerm()}
          class={styles.input}
        />
        <button type="submit" class={styles.submitBtn}>
          Submit
        </button>
      </div>
    </form>
  );
};

interface AutoCompleteSearchFormProps {
  onSearch: (searchTerm: string) => void;
}

interface AutoCompleteResultsProps {
  results?: ToDo[];
  query: string;
}

export default AutoComplete;
