import React from 'react'

import classes from './UserNameBar.module.css'

function userNameBar() {
  return (
     <div className={classes.userNameContainer}>
         <h4 className={classes.userNameDisplay}>Logged in as: {/*username*/}</h4>
     </div> 
  )
}

export default userNameBar