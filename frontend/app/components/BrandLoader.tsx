import Image from "next/image";
import BrandLogoTrace from "./BrandLogoTrace";

export default function BrandLoader() {
  return (
    <div
      aria-hidden="true"
      className="brand-loader fixed inset-0 z-[110] flex items-center justify-center bg-[#f5f3ed]"
    >
      <Image
        src="/images/varatect-introduction.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="brand-loader__logo relative z-10 w-[min(70vw,250px)]">
        <div className="brand-loader__mark">
          <Image
            src="/images/varatect-logo.png"
            alt=""
            fill
            priority
            sizes="250px"
            className="brand-loader__mark-image object-fill"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <BrandLogoTrace />
        </div>
        <div className="brand-loader__wordmark">
          <Image
            src="/images/varatect-logo.png"
            alt=""
            fill
            sizes="250px"
            className="object-fill"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      </div>
    </div>
  );
}
