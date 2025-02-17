export default function AlunoPortal() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Portal do Aluno</h1>
          <p className="text-gray-600 mb-6">Acesse suas informações acadêmicas</p>
          <div className="space-y-4">
            
            <a
              href="http://127.0.0.1:8000/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Frequência e Presença
            </a>
            <a
              href="http://127.0.0.1:8000/perfil/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-purple-500 text-white py-2 rounded-lg shadow-md hover:bg-purple-600 transition"
            >
              Meu Perfil
            </a>
            <a
              href="http://127.0.0.1:8000/logout/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition"
            >
              Sair
            </a>
          </div>
        </div>
      </div>
    );
  }
  