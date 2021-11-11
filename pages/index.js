import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const initialTodos = [
    { id: 1, body: "Get Todo Item 1" },
    {
      id: 2,
      body: "Get Todo Item 2",
    },
  ];

  const [todos, settodos] = useState(
    // () => JSON.parse(localStorage.getItem("todos")) || []
    initialTodos
  );

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    settodos(newTodos);
  }
  function addTodo(todo) {
    settodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        size="lg"
        alignSelf="flex-end"
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300 , blue.500)"
        bgClip="text"
      >
        Todo List
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}
