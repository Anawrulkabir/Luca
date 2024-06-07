import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'

import { useState } from 'react'

export function Join() {
  const [defaultValue, setDefaultValue] = useState('login')
  return (
    <div className="flex  justify-center mt-16 relative h-screen">
      <Tabs defaultValue={defaultValue} className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <SignUp setDefaultValue={setDefaultValue} />
        </TabsContent>
        <TabsContent value="login">
          <Login setDefaultValue={setDefaultValue} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
