import { Button, Input, HStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const toast = useToast();
  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No Content.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: new Date().getTime().toString(),
      body: content,
    };
    addTodo(todo);
    setcontent("");
  }

  const [content, setcontent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add ToDo Here"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}
