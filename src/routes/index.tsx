import { AutoComplete, Footer } from "../components";
import { useRouteData, createRouteData } from "solid-start";
import { ToDo } from "../types";

export function routeData() {
  return createRouteData(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return (await response.json()) as ToDo[];
  });
}

export default function Home() {
  const todos = useRouteData<typeof routeData>();

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello AutoComplete!
      </h1>
      <AutoComplete results={todos()} />
      <Footer />
    </main>
  );
}
