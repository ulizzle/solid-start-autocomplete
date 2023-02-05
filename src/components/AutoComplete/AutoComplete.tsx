import { Show, createEffect, createSignal } from "solid-js";
import styles from "./styles";
import { A } from "solid-start";
import { ToDo } from "../../types";

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
      <Show when={query() && filteredResults.length === 0}>
        <ul class="mx-auto max-w-xl">
          {filteredResults().map((result: ToDo) => () => (
            <li class={styles.resultsListItem}>
              <A href={`/todos/${result.id}`}>{result.title}</A>
            </li>
          ))}
        </ul>
      </Show>
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
