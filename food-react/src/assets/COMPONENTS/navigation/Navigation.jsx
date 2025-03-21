import "./Navigation.css"


const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Menu</li>
        <li href="#">Contact</li>
        <li href="#"> About</li>
      </ul>
      <button>login</button>
    </nav>
  );
};
export default Navigation