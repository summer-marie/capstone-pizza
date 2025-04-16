const Contact = () => {
  return (
    <div>
      Contact page
      <form id="imgUploader" className='max-w-lg mx-auto'>
        <label
          className='block mb-2 text-sm font-medium text-gray-900'
          htmlFor='user_avatar'
        >
          Upload file
        </label>
        <input
          className='block w-full text-sm focus:outline-none text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 '
          aria-describedby='user_avatar_help'
          id='user_avatar'
          type='file'
        />
        <div
          className='mt-1 text-sm text-gray-500'
          id='user_avatar_help'
        >
          A profile picture is useful to confirm your are logged into your
          account
        </div>
      </form>







      
    </div>
  )
}

export default Contact
