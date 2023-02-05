import { createRouteData, useRouteData } from "solid-start";
import { ToDo } from "../types";

export function routeData() {
  return createRouteData(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return (await response.json()) as ToDo[];
  });
}

export default function TodosIndexPage() {
  return null;
}
