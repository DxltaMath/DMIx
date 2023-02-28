import { useState } from "react"

function IndexPopup() {

  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>DMPx</h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://COMING-SOON" target="_blank">
        Visit our website
      </a>
    </div>
  )
}

export default IndexPopup
