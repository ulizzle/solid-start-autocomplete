import { useRouteData, useParams } from "solid-start";
import { ToDo } from "../../types";

export default function TodoRoute() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Todo
      </h1>
      <p>This should be a Todo Item with the right ID</p>
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
        <a href="/" class="text-sky-600 hover:underline">
          Home
        </a>
        {" - "}
        <span>Todo Page</span>
      </p>
    </main>
  );
}
