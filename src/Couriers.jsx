import React, { useState, useMemo } from 'react';
import { Input, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from '@nextui-org/react';
import { Chip } from '@nextui-org/react'; // Import Chip from NextUI

function Couriers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [copiedId, setCopiedId] = useState(''); // State for the copied courier ID

  const couriersd = [
    { id: "1", name: '1', code: '139express' },
    { id: "2", name: '2', code: '17exp' },
    { id: "3", name: '3', code: '17feia' },
    { id: "4", name: '4', code: '1st' },
    { id: "5", name: '5', code: '1stop' },
    { id: "6", name: '6', code: '17exp' },
    { id: "7", name: '7', code: '17feia' },
    { id: "8", name: '8', code: '1st' },
    { id: "9", name: '9', code: '1stop' },
    { id: "10", name: '10', code: '17exp' },
    { id: "11", name: '11', code: '17feia' },
    { id: "12", name: '12', code: '1st' },
    { id: "13", name: '13', code: '1stop' },
  ];

  // Filter couriers based on the search term
  const filteredCouriers = useMemo(() => {
    return couriersd.filter(courier => 
      courier.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      courier.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Calculate pagination details
  // Pagination logic
const totalPages = filteredCouriers.length === 0 ? 1 : Math.ceil(filteredCouriers.length / itemsPerPage);

  
  // Get current couriers for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCouriers = filteredCouriers.length === 0 ? 1 : filteredCouriers.slice(indexOfFirstItem, indexOfLastItem);

  // Copy to clipboard function
  const copyToClipboard = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id); // Set the copied ID
    setTimeout(() => setCopiedId(''), 2000); // Clear after 2 seconds
  };

  // Effect to reset current page when filtered couriers change
  React.useEffect(() => {
    setCurrentPage(1); // Reset to first page when the filtered list changes
  }, [filteredCouriers]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">2,000+ Supported Couriers</h2>
      <p className="mb-6 text-gray-600 text-center">
        In the list below, you can find all supported couriers. For our spreadsheet Add-Ins, click on any courier below to see how to use the corresponding courier code.
      </p>

      {/* Search Input */}
      <Input
        clearable
        placeholder="Search Courier..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        bordered={false}
        className='mb-5'
        css={{ marginBottom: '1.5rem', paddingTop: '0.5rem',border:"none" }}
      />

      {/* NextUI Table */}
      <Table aria-label="Supported Couriers Table" css={{ borderCollapse: 'collapse', width: '100%' }}>
        <TableHeader>
          <TableColumn>Courier Name</TableColumn>
          <TableColumn>Courier Code</TableColumn>
        </TableHeader>
        <TableBody>
          {currentCouriers.length > 0 ? (
            currentCouriers.map((courier) => (
              <TableRow key={courier.id}>
                <TableCell>{courier.name}</TableCell>
                <TableCell>
                  <Chip 
                    className="capitalize cursor-pointer" 
                    color="secondary" 
                    size="sm" 
                    variant="flat"
                    onClick={() => copyToClipboard(courier.id, courier.code)} // Copy on click
                  >
                    {courier.code}
                  </Chip>
                  {/* Conditional tooltip display for the copied ID */}
                  {copiedId === courier.id && <span className="tooltip">"{courier.code}" copied!</span>}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow key="no-results">
              <TableCell colSpan={2} css={{ textAlign: 'center' }}>
                No couriers found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Tooltip CSS */}
      <style jsx>{`
        .tooltip {
          display: inline-block;
          margin-left: 8px;
          padding: 4px 8px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 4px;
          font-size: 12px;
          position: absolute;
        }
      `}</style>

      {/* Pagination */}
      <div className='flex justify-center mt-3'>
        <Pagination
          total={totalPages}
          page={currentPage} // Use page instead of initialPage
          onPageChange={(page) => setCurrentPage(page)} // Update currentPage on page change
          color="secondary" // You can set this to any color supported by NextUI
          css={{ marginTop: '1rem', justifyContent: 'center' }}
        />
      </div>
    </div>
  );
}

export default Couriers;
