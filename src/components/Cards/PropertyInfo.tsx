const PropertyInfo = () => {
  return (
    <>
      <header className="pt-10 pb-5">
        <h2 className="text-2xl font-semibold">Property Information</h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <table>
          <tr className="border-b py-10">
            <td className="py-2">Type</td>
            <td className="font-medium">Townhouse</td>
          </tr>
          <tr className="border-b py-10">
            <td className="py-2">Purpose</td>
            <td className="font-medium">For Rent</td>
          </tr>
          <tr className="border-b py-10">
            <td className="py-2">Reference no.</td>
            <td className="font-medium">Bayut - axc-3971749</td>
          </tr>
        </table>
        <table>
          <tr className="border-b py-10">
            <td className="py-2">Furnishing</td>
            <td className="font-medium">Unfurnished</td>
          </tr>
          <tr className="border-b py-10">
            <td className="py-2">Tru Check TM on</td>
            <td className="font-medium">23 January 2024</td>
          </tr>
          <tr className="border-b py-10">
            <td className="py-2">Added on</td>
            <td className="font-medium">8 January 2024</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default PropertyInfo;
