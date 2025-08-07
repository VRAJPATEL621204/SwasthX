import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DocumentDetails() {
  const { id } = useParams();
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/documents/${id}`)
      .then(res => res.json())
      .then(data => setDoc(data.data));
  }, [id]);

  if (!doc) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading document details...
      </div>
    );
  }

  // Group detailed info by category
  const detailedInfoData = doc.fields || []; // Replace 'fields' with your actual key if different
  const detailedByCategory = detailedInfoData.reduce((acc, item) => {
    const cat = item.category || 'Uncategorized';
    acc[cat] = acc[cat] || [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">Document Details</h1>
          <Link to="/monitor" className="text-blue-600 hover:underline text-sm font-medium">
            ← Back to Monitor
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow p-6 max-w-4xl mx-auto space-y-8">
        {/* General Info */}
        <section className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">General Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Detail label="Execution ID" value={doc.executionId} />
            <Detail label="File Name" value={doc.fileName} />
            <Detail label="File Type" value={doc.fileType} />
            <Detail label="Start Time" value={doc.startTime} />
            <Detail label="End Time" value={doc.endTime || 'Not completed'} />
            <Detail label="Review Status" value={<Badge status={doc.reviewStatus} />} />
            <Detail
              label="Environment"
              value={
                <span
                  className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
                    doc.environment === 'prod'
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {doc.environment}
                </span>
              }
            />
          </div>
        </section>

        {/* Detailed Info */}
        <section className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Detailed Information</h2>

          {Object.keys(detailedByCategory).length === 0 ? (
            <p className="text-gray-500 text-sm">No additional details available.</p>
          ) : (
            Object.entries(detailedByCategory).map(([category, items]) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{category}</h3>
                <div className="space-y-2">
                  {items.map(item => (
                    <div
                      key={item._id}
                      className="flex flex-col border rounded-lg p-4 bg-gray-50"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">{item.key}</span>
                        <span className="text-gray-800">{item.value}</span>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        Confidence: {item.confidence.toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

// Info Item
const Detail = ({ label, value }) => (
  <div className="flex justify-between items-center border-b py-2">
    <span className="font-medium text-gray-600">{label}:</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

// Badge Component
const Badge = ({ status }) => {
  const base =
    'inline-block text-xs font-semibold px-2 py-1 rounded-full capitalize';
  switch (status) {
    case 'pending':
      return <span className={`${base} bg-yellow-100 text-yellow-800`}>{status}</span>;
    case 'completed':
      return <span className={`${base} bg-green-100 text-green-800`}>Completed</span>;
    case 'rejected':
      return <span className={`${base} bg-red-100 text-red-800`}>Rejected</span>;
    default:
      return <span className={`${base} bg-gray-200 text-gray-700`}>{status}</span>;
  }
};
