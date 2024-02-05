import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function navToPage(path) {
    navigate(path);
  }

  return (
    <div>
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugit
        pariatur nam veniam debitis laudantium cum eligendi, qui unde dolor,
        voluptate, natus blanditiis! Aspernatur minus porro sit doloribus earum
        dolor?
      </p>
      <button onClick={() => navToPage("/about")}>Go to About Page</button>
      <button onClick={() => navToPage("/filter")}>Go to Filter Page</button>
    </div>
  );
}

export default Home;
