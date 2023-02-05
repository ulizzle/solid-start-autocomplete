import { createRouteData, useRouteData, RouteDataArgs } from "solid-start";
import { ToDo } from "../../types";
import { Footer } from "../../components";

export function routeData({ params }: RouteDataArgs) {
  return createRouteData(async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${params?.id}`
    );
    return (await response.json()) as ToDo;
  });
}

export default function TodoRoute() {
  const todo = useRouteData();
  if (!todo()) return null;
  console.log({ todo });
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Todo: {todo()?.id}
      </h1>
      <section>
        <h3>{todo()?.title}</h3>
      </section>
      <Footer />
    </main>
  );
}
