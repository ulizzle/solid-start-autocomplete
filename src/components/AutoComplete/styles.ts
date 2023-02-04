const input = `
  bg-slate-50
  border border-gray-300 text-gray-900 text-sm
  rounded-lg
  focus:ring-blue-500 focus:border-blue-500
  block w-full p-2.5
  dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400
  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500
`;

const submitBtn = `
  bg-blue-500 hover:bg-blue-700
  text-white font-bold
  py-2 px-4
  rounded
  ml-2
`;

const form = `
  max-w-xl min-w-min m-auto
  bg-sky-700
  px-8 py-5
`;

const formHeader = `
  text-2xl font-bold text-white text-left
`;

const resultsListItem = `
  bg-slate-50 dark:bg-gray-300 dark:text-black
  text-gray-900  text-sm p-2.5 rounded-lg my-1 cursor-pointer
  hover:bg-blue-500 hover:text-white hover:font-bold hover:shadow-lg
  hover:transition-all hover:duration-300 hover:ease-in-out hover:transform
  hover:scale-105 hover:rounded-none hover:rounded-lg hover:shadow-none
  hover:shadow-lg hover:shadow-xl hover:shadow-2xl hover:shadow-inner
  hover:shadow-outline hover:shadow-outline-gray
`;

export default {
  input,
  submitBtn,
  form,
  formHeader,
  resultsListItem,
};
