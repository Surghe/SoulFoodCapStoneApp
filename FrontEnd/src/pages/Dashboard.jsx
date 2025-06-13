import { useState } from "react";

export default function Dashboard() {
  const { setUser, setMenu, user } = userInfo();

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get(`http://localhost:5000/api/menu`, {
          headers: { token: cookies.token },
        });
        const { username, admin, email, Menu } = res.data;
        setMenu(Menu.items);
        setUser({ username, email, admin });
      } catch (err) {
        console.error(err.message);
      }
    }

    getUser();
  }, [cookies.token, setMenu, setUser]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="dashboardContainer">
      <h1 style={{textAlign: "center"}}>Welcome {user.username}!</h1>
      {user.admin ? <AdminDashboard /> : <Cart />}
    </div>
  );
}