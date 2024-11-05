import Profile from "./Components/Profile";

function App() {

  const profile = {
    name: "Ganishwar Arun",
    work: "Student",
    pic: "https://fastly.picsum.photos/id/93/200/200.jpg?hmac=zg_Gq7olpOr79tOB65nmsvLWAIR_Ju8QQWkTKurbgJs",
  };

  return (
    <div className="flex justify-around items-center h-screen text-3xl text-red-400">
      <Profile 
        name = {profile.name}
        work={profile.work}
        pic= {profile.pic}
      />
    </div>
      
  )
}

export default App
