import styles from '../styles/Home.module.css'



function Home() {

  const btnHandler = async () => {
    fetch('api/hello.js')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <button onClick={() => btnHandler()}>test</button>
    </div>
  )
}



export default Home