import { Dock } from '../../components/ui/dock'

const Navbar = () => {
  return (
    <nav className="fixed top-0 p-4 left-0 right-0 z-50 bg-opacity-70 backdrop-blur-md bg-transparent">
      <div className="container mx-auto px-4 py-2 flex justify-center items-center">
        <Dock />
      </div>
    </nav>
  )
}

export default Navbar