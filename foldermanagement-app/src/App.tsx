import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [mainFolder, setMainFolder] = useState<any>([])
  const [name, setName] = useState('')
  const addFolder: any = (newFolder: any, e: any) => {
    newFolder = {
      name: name,
      id: Math.random(),
      file: [],
    }
    setMainFolder((state: any) => [...state, newFolder])
    setName('')
  }
  const addEachFile: any = (e: any) => {
    console.log(e)
  }
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => {
          e.preventDefault()
          setName(e.target.value)
        }}
      />
      <button onClick={addFolder}> Add folder</button>
      <div style={{ display: 'flex', gap: '2rem', overflow: 'scroll' }}>
        {mainFolder.length > 0 &&
          mainFolder.map((item: any, index: any) => {
            return (
              <button key={index} onClick={() => addEachFile(item.id)}>
                <h1 style={{ color: 'blue' }}>{item.name}</h1>
              </button>
            )
          })}
      </div>
    </div>
  )
}

export default App
