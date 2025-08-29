import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white py-4 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3x4 font-bold">Productos App</Link>
        <div>
          <Link
            to="/nuevo-producto"
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Nuevo Producto
          </Link>
        </div>
      </div>
    </nav>
  );
}
