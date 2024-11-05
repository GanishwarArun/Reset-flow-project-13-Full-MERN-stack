import {useState} from 'react'

const ComponentWithUseMemo = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            
      <div className='container h-screen mx-auto dark:bg-gray-800 bg-orange-100 text-black dark:text-white'>
          <div className='flex items-center justify-center h-screen'>
              <h1 className='text-5xl font-bold'
                  onClick={() => {
                      setDarkMode((currentMode) => !currentMode);
              }}
            > 
                  {darkMode ? 'Dark Mode' : 'Light Mode'}
              </h1>
              
          </div>
          
    </div>
                    
    
    </div>
  )
}

export default ComponentWithUseMemo
