import React from 'react'
import Contact from './Contact'

function ListContact({list}) {
  return (
    <div>
        {list.length ? list.map(elm => <Contact contact={elm} />):<h2>Not Found</h2>}

    </div>
  )
}

export default ListContact