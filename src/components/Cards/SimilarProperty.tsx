const SimilarProperty = () => {
  return (
    <section className="w-full p-3 border rounded-md mb-5">
      <div className="flex items-center pb-4 gap-4 ">
        <img src="/near1.jpg" className="w-24 h-24 object-cover rounded-md" />
        <div>
          <p className="text-lg font-medium">Downtown Dubai</p>
          <p className="text-sm">See the community attractions and lifestyle</p>
        </div>
      </div>
      <hr className="ml-[6.5rem] mr-2" />
      <div className="flex items-center pt-4 gap-4">
        <img src="/near2.jpg" className="w-24 h-24 object-cover rounded-md" />
        <div>
          <p className="text-lg font-medium">Claren Tower 1</p>
          <p className="text-sm">
            View building amenities, service charges and more
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimilarProperty;
