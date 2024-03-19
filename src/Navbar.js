import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
      <Link className='home' to="/">Home</Link>
      <Link className='counter' to="/Counter">Counter</Link>
      <Link className='changeableinput' to="/input">ChangableInput</Link>
      <Link className='Todolistt' to="/Todolistt">Todolist</Link>
      <Link className='LessonLifecycle' to="/LessonLifecycle">LessonLifecycle</Link>
    </div>
  )
};