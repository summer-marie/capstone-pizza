const AdminLogin = () => {
  return (
    <>
      <div className='p-30 borderShadow h-screen bg-gray-400'>
        <h2 className='mb-10 text-center text-2xl/9 font-bold tracking-tight text-black'>
          Administrator Portal
        </h2>
        <form
          className='flex flex-col items-center justify-center'
          // onSubmit={handleSubmit}
        >
          <div className='mb-5'>
            <label
              htmlFor='email'
              className='block mb-2 text-md font-medium text-black text-left uppercase'
            >
              admin email
            </label>
            <input
              // value={loginForm.email}
              // onChange={(e) =>
              //   setLoginForm({ ...loginForm, email: e.target.value })
              // }
              type='email'
              id='email'
              className='disabled:text-gray-300 w-80 text-sm rounded-lg block p-2.5 border focus:ring-2
              bg-slate-300
              border-gray-900 
              text-gray-900  
              focus:ring-red-500  
              focus:bg-white   
              hover:border-red-500'
              // autoComplete='email'
              // disabled={loading}
              required
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='password'
              className='block mb-2 text-md font-medium text-black text-left uppercase'
            >
              Admin password
            </label>
            <input
              // value={loginForm.password}
              // onChange={(e) =>
              //   setLoginForm({ ...loginForm, password: e.target.value })
              // }
              id='password'
              name='password'
              type='password'
              className='disabled:text-gray-300 w-80 text-sm rounded-lg block p-2.5 border focus:ring-2
               bg-slate-300
               border-gray-900 
               text-gray-900  
               focus:ring-red-500  
               focus:bg-white   
               hover:border-red-500'
              required
              autoComplete='current-password'
              // disabled={loading}
            />
          </div>
          <button
            type='submit'
            className='font-medium focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-80  cursor-pointer
                text-white 
                bg-gradient-to-r 
                from-red-400 
                via-red-500
                to-red-600
                hover:bg-gradient-to-br 
                focus:ring-red-300  
                hover:text-black
                disabled:cursor-not-allowed'
            // disabled={loading}
            // disabled={true}
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  )
}

export default AdminLogin
