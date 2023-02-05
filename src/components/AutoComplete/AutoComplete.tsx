import { Show, createEffect, createSignal } from "solid-js";
import styles from "./styles";
import { ToDo } from "../../types";
import { useNavigate } from "solid-start";

const AutoComplete = (props: { results: ToDo[] }) => {
  const [query, setQuery] = createSignal("");
  const [filteredResults, setFilteredResults] = createSignal<ToDo[]>([]);
  const { results } = props;
  const [result, setResult] = createSignal<ToDo | undefined>(undefined);
  const [didSelectResult, setDidSelectResult] = createSignal(false);
  const [didSubmit, setDidSubmit] = createSignal(false);

  // Filter the results based on the query
  createEffect(() => {
    if (!results) return;
    setFilteredResults(
      results.filter((result) => {
        return result.title.toLowerCase().includes(query().toLowerCase());
      })
    );
  });

  // Navigate to the selected result
  const navigate = useNavigate();
  createEffect(() => {
    if (didSubmit() && result()) {
      navigate(`/todos/${result().id}`);
    }
  });

  return (
    <div id="AutoComplete">
      <AutoCompleteSearchForm
        onSearch={(value) => {
          setQuery(value);
        }}
        result={result}
        onSubmit={(result) => setDidSubmit(!didSubmit())}
      />
      <Show
        when={query() && filteredResults.length === 0 && !didSelectResult()}
      >
        <ul class="mx-auto max-w-xl">
          {filteredResults().map((result: ToDo) => () => (
            <li
              class={styles.resultsListItem}
              onClick={() => {
                setResult(result);
                setDidSelectResult(!didSelectResult());
              }}
            >
              {result.title}
            </li>
          ))}
        </ul>
      </Show>
    </div>
  );
};

const AutoCompleteSearchForm = (props: AutoCompleteSearchFormProps) => {
  const [searchTerm, setSearchTerm] = createSignal("");
  const { onSearch, result, onSubmit } = props;
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
          value={result()?.title || searchTerm()}
          class={styles.input}
        />
        <button
          type="submit"
          class={styles.submitBtn}
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

interface AutoCompleteSearchFormProps {
  result?: ToDo;
  onSearch: (searchTerm: string) => void;
  onSubmit: (result: ToDo) => void;
}

interface AutoCompleteResultsProps {
  results?: ToDo[];
  query: string;
}

export default AutoComplete;
