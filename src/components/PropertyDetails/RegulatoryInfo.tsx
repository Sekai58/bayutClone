import { MdErrorOutline } from "react-icons/md";

const RegulatoryInfo = () => {
  return (
    <section className="py-7">
      <header>
        <h3 className="font-semibold text-2xl pb-5">Regulatory Information</h3>
      </header>
      <div className="flex">
        <table className="flex-1">
          <tr className="border-b">
            <td className="pr-6 py-2 flex items-center gap-3">
              Permit Number{" "}
              <span className="text-xl rotate-180 text-[#006169]">
                <MdErrorOutline />
              </span>
            </td>
            <td className="py-2">71146622973</td>
          </tr>
          <tr className="border-b p-2">
            <td className="py-2 flex items-center gap-3">
              DED
              <span className="text-xl rotate-180 text-[#006169]">
                <MdErrorOutline />
              </span>
            </td>
            <td className="py-2">950052</td>
          </tr>
          <tr className="border-b p-2">
            <td className="py-2 flex items-center gap-3">
              RERA
              <span className="text-xl rotate-180 text-[#006169]">
                <MdErrorOutline />
              </span>
            </td>
            <td className="py-2">26446</td>
          </tr>
          <tr className="border-b p-28">
            <td className="py-2 flex items-center gap-3">
              BRN
              <span className="text-xl rotate-180 text-[#006169]">
                <MdErrorOutline />
              </span>
            </td>
            <td className="py-2">50034</td>
          </tr>
        </table>
        <div className="flex-1 flex flex-col items-center justify-center">
          <p>Trankheesi Permit</p>
          <img src="/qrcode.png" className="h-24 w-24" />
        </div>
      </div>
    </section>
  );
};

export default RegulatoryInfo;
