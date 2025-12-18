import React from 'react'
import ThemeProvider from './providers/ThemeProvider'
import Content from './components/Content'

const App = () => {
  return (
    
       <ThemeProvider>
      <Content/>
       </ThemeProvider>
    
  )
}

export default App