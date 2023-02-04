import { AutoComplete } from "../components";
import { useRouteData, createRouteData } from "solid-start";

export function routeData() {
  return createRouteData(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return (await response.json()) as ToDo[];
  });
}

export interface ToDo {
  title: string;
  completed: boolean;
  id: number;
  userId: number;
}

export default function Home() {
  const todos = useRouteData<typeof routeData>();

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello AutoComplete!
      </h1>
      <AutoComplete results={todos()} />
      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <a href="/about" class="text-sky-600 hover:underline">
          About Page
        </a>{" "}
      </p>
    </main>
  );
}
