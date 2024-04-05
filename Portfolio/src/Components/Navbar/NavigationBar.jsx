import './styles.css';

export default function Navigationbar(){
    return (<nav>
    <a class="item">Home</a>
    <a class="item">About</a>
    <div class="item">
      Skills
      <div class="dropdown">
        <div>
          <a>React</a>
          <a>Angular</a>
          <a>Vue</a>
        </div>
      </div>
    </div>
    <a class="item">Contact</a>
    <div class="underline"></div>
  </nav>)
}

