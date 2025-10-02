import { Box, Button, Text } from '@chakra-ui/react'
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App