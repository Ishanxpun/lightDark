import React from 'react'
import ThemeProvider from './providers/ThemeProvider'
import Content from './components/content'

const App = () => {
  return (
    
       <ThemeProvider>
      <Content/>
       </ThemeProvider>
    
  )
}

export default App