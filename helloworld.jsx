import { useEffect } from "react";

export default function HelloWorld() {
  useEffect(() => {
    console.log("hello world mounted");
  }, []);

  return <h1>Hello World</h1>;
}
