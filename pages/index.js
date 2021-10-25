import styles from '../styles/Home.module.css'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())


function Home() {
  const { data, error } = useSWR('/api/hello.js', fetcher)

  const btnHandler = async () => {
    console.log(data, error)
  }

  return (
    <div>
      <button onClick={() => btnHandler()}>test</button>
    </div>
  )
}



export default Home