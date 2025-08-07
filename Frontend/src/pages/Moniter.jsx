import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pic from "../assets/pic.avif"
import {
  FaCube,
  FaCog,
  FaFileAlt,
  FaClipboard,
  FaBalanceScale,
  FaShieldAlt
} from 'react-icons/fa';

export default function MonitorPage() {
  const [documents, setDocuments] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 5;

  const fetchDocuments = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/documents`);
    const data = await res.json();
    setDocuments(data.data || []);
    setCurrentPage(1);
    setLastUpdated(new Date().toLocaleString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    }));
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const counts = {
    pending: documents.filter(doc => doc.status === 'pending').length,
    completed: documents.filter(doc => doc.status === 'completed').length,
    rejected: documents.filter(doc => doc.status === 'rejected').length,
  };

  const totalPages = Math.ceil(documents.length / documentsPerPage);
  const indexOfLastDoc = currentPage * documentsPerPage;
  const indexOfFirstDoc = indexOfLastDoc - documentsPerPage;
  const currentDocs = documents.slice(indexOfFirstDoc, indexOfLastDoc);

  return (
    <div className="flex min-h-screen bg-[#f9fafb] text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-16 bg-white border-r shadow-sm fixed top-0 left-0 h-screen z-50 flex flex-col justify-between py-6">
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-xl p-2">
            <img src="/logo.png" alt="" className='rounded-xl' />
          </div>
          <FaCube className="text-gray-500 hover:text-black" size={20} />
          <FaCog className="text-gray-500 hover:text-black" size={20} />
          <FaFileAlt className="text-gray-500 hover:text-black" size={20} />
          <FaClipboard className="text-gray-500 hover:text-black" size={20} />
          <FaBalanceScale className="text-gray-500 hover:text-black" size={20} />
          <FaShieldAlt className="text-gray-500 hover:text-black" size={20} />
        </div>
        <div className="flex justify-center">
          <img src={pic} alt="User" className="rounded-full w-8 h-8" />
        </div>
      </aside>

      {/* Main content */}
      <div className="ml-16 flex-1">
        <header className="sticky top-0 z-40 bg-white border-b">
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-xl font-bold">SwasthX Monitor</h1>
            <div className="flex items-center gap-4">
              <div className="flex border rounded bg-gray-100 text-sm">
                <Link to="/" className="px-4 py-2 font-semibold text-gray-900 bg-white rounded-xl">Home</Link>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-8">
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4">Executions overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <StatusCard label="Pending" count={counts.pending} text="Files queued" color="yellow" />
              <StatusCard label="Completed" count={counts.completed} text="Files succeeded" color="green" />
              <StatusCard label="Rejected" count={counts.rejected} text="Files failed" color="red" />
            </div>
          </section>

          <section className="bg-white rounded-xl shadow border">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="font-semibold text-gray-900">Executions table</div>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                Last updated <span className="font-medium text-gray-700">{lastUpdated}</span>
                <button
                  onClick={fetchDocuments}
                  className="text-white hover:text-black bg-gray-600 px-3 py-2 rounded-md text-lg flex items-center gap-1"
                  title="Refresh"
                >
                  ↻
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-600">
                  <tr className="border-b">
                    {["Execution ID", "File Name", "File Type", "Start Time", "End Time", "Review Status", "Environment", "Action"].map((h, i) => (
                      <th key={i} className="px-4 py-3 font-semibold whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {currentDocs.map(doc => (
                    <tr key={doc._id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3">{doc.executionId.slice(0, 8)}...</td>
                      <td className="px-4 py-3">{doc.fileName}</td>
                      <td className="px-4 py-3">{doc.fileType}</td>
                      <td className="px-4 py-3">{doc.startTime}</td>
                      <td className="px-4 py-3">{doc.endTime || '...'}</td>
                      <td className="px-4 py-3">
                        <Badge status={doc.reviewStatus} />
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
                          doc.environment === 'prod' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {doc.environment}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          to={`/documents/${doc._id}`}
                          className="inline-block text-blue-600 hover:underline text-sm font-medium"
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center px-4 py-4 border-t text-sm">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num)}
                    className={`px-3 py-1 rounded ${
                      num === currentPage
                        ? "bg-gray-300 text-black font-bold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

const StatusCard = ({ label, count, text, color }) => {
  const colors = {
    yellow: {
      badge: 'bg-yellow-100 text-yellow-800',
      dot: 'bg-yellow-500'
    },
    green: {
      badge: 'bg-green-100 text-green-800',
      dot: 'bg-green-500'
    },
    red: {
      badge: 'bg-red-100 text-red-800',
      dot: 'bg-red-500'
    }
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 flex items-center justify-between">
      <div className="flex items-center gap-3 text-sm font-medium">
        <span className={`w-2 h-2 rounded-full ${colors[color].dot}`} />
        <span className={`${colors[color].badge} px-2 py-1 rounded-full`}>{label}</span>
        <span className="text-2xl font-bold">{count}</span>
        <span className="text-sm text-gray-500 ml-1">{text}</span>
      </div>
    </div>
  );
};

const Badge = ({ status }) => {
  const base = ' text-xs font-semibold px-2 py-1 rounded-full capitalize';
  switch (status) {
    case 'pending':
      return <span className={`${base} bg-yellow-100 text-yellow-800`}>{status}</span>;
    case 'completed':
      return <span className={`${base} bg-green-100 text-green-800`}>{status}</span>;
    case 'rejected':
      return <span className={`${base} bg-red-100 text-red-800`}>{status}</span>;
    default:
      return <span className={`${base} bg-gray-200 text-gray-700`}>{status}</span>;
  }
};
