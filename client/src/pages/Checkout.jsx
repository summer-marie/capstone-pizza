import React from 'react'

const Checkout = () => {
  return (
    <>
{/* Needs to have a dynamic grid that populates with all the items they selected. Should be on the left side of the screen */}
{/* need to map over items dynamically */}
<div class="grid grid-cols-1 xl:grid-cols-1 gap-9 px-4 py-2.5 ml-[10%] mt-5">
    <div class="w-150 h-80 bg-gray-400 rounded-xl"></div>
    <div class="w-150 h-80 bg-gray-400 rounded-xl"></div>
    <div class="w-150 h-80 bg-gray-400 rounded-xl"></div>
    <div class="w-150 h-80 bg-gray-400 rounded-xl"></div>
</div>

{/* Right side of the screen will have the total information in a modale or a card off the side */}
    </>
  )
}

export default Checkout