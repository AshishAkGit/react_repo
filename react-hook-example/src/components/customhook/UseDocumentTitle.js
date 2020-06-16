import {useEffect} from 'react'

//same like HOC and Render-props - to share common logic
function UseDocumentTitle(count){

    useEffect(() => {
        document.title=`Count - ${count}`
      
    }, [count])
}

export default UseDocumentTitle