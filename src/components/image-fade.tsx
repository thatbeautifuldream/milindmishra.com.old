const ImageFade = ({ src }: { src: string }) => {
  return (
    <div>
      <div className="relative flex max-w-6xl justify-center overflow-hidden">
        <img
          src={src}
          alt="hero-section"
          className="h-full w-full rounded-lg border object-cover md:w-[1300px]"
        />
        <div className="from-1% absolute inset-0 bg-gradient-to-t from-white to-35%" />
      </div>
    </div>
  );
};

export default ImageFade;
