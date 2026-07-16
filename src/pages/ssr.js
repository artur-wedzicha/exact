// src/pages/ssr.js
import React from "react"

export async function getServerData() {
  const res = await fetch("https://api.chucknorris.io/jokes/random")
  const data = await res.json()

  return {
    props: {
      joke: data.value,
    },
  }
}

export default function SSRPage({ serverData }) {
  return (
    <main>
      <h1>SSR page</h1>
      <p>Żart Chucka Norrisa:</p>
      <blockquote>{serverData.joke}</blockquote>
    </main>
  )
}
