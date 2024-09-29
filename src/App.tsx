import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto p-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome to My App</CardTitle>
          <CardDescription>This is a basic UI using shadcn components</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-2xl font-bold">{count}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => setCount((count) => count + 1)}>
            Increment
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
