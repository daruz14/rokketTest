import { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Post from '../components/Post'
import BasicView from '../components/BasicView'
import styles from '../styles/Home.module.css'


export default function Products() {

  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [init, setInit] = useState(true)

  const onFormSubmit = e => {
    e.preventDefault();
    const appId = process.env.APP_ID
    setInit(false)
    setLoading(true)
    const baseUrl = `https://dummyapi.io/data/api/tag/${search}/post`
    axios.get(
      baseUrl,
      {
        headers: { 'app-id': appId }
      }
    ).then(
      ({ data }) => setPosts(data.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }

  const onChangeValue = event => {
    setSearch(event.target.value)
  }

  const postsResults = posts.map((value, index) =>
    <Post
      index={index}
      postOwner={value.owner}
      postImage={value.image}
      postText={value.text}
    />
  )
  const postNoResults = (
    <BasicView
      text='No se encontraron resultados para ese tag'
      viewType='noResults'
    />
  )
  const postView = posts.length !== 0 ? postsResults : postNoResults
  const loadingView = (
    <BasicView
      text='Loading...'
      viewType='loading'
    />
  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Buscador de posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenid@ al buscador de posts por tags!
        </h1>

        <form onSubmit={onFormSubmit} className={styles.description}>
        <label className={styles.label}>
            Por cuál tag buscas?:
            <input type="text" name="search" onChange={onChangeValue} className={styles.labelText}/>
        </label>
        <input type="submit" value="Buscar" className={styles.submit}/>
        </form>

        <div className={styles.grid}>
          {
            loading && loadingView
          }
          {
            !loading && !init && postView
          }
        </div>
      </main>
    </div>
  )
}
