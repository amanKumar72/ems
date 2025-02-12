
import {useForm} from 'react-hook-form'
const Login = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
  return (
    <div className='w-screen h-screen flex items-center justify-center '>
      <div className=' border-2 border-red-600 rounded-xl md:p-5'>
        <form onSubmit={handleSubmit(data=>console.log(data))} className='flex flex-col p-5 md-10 lg:p-15 items-center justify-center gap-5 '>
            <input {...register('email',{required:true})}  className='border-2 border-red-400 outline-none rounded-full px-4  py-2 md:px-8 md:py-4 text-base md:text-lg font-semibold placeholder:text-zinc-400 text-black' type="email" name='email'  placeholder='Enter your email' />
            {errors.email && <span className='text-red-400'>email is required</span>}
            <input {...register('password',{required:true})} className='border-2 border-red-400 outline-none rounded-full px-4 py-2 md:px-6 md:py-4 text-base md:text-lg font-semibold placeholder:text-zinc-400 text-black' type="password" name='password' placeholder='Enter your password' />
            {errors.password && <span className='text-red-400'>password is required</span>}
            <input className='border-none rounded-full px-9 py-2 md:px-12 md:py-4 bg-green-400  text-xl md:text-2xl cursor-pointer font-bold hover:bg-green-500 ' type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login
