import { useState } from "react";

export default function AuthPage() {
  const [newUser, setNewUser] = useState(false);

  return (
    <div>
      {newUser ? (
        <RegisterForm setNewUser={setNewUser} />
      ) : (
        <LoginForm setNewUser={setNewUser} />
      )}
    </div>
  );
}