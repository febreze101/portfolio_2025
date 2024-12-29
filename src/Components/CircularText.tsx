function CircularText() {
  const text = "✦ ysub ✦ ysub ✦ ysub ";
  const CHARS = text.split("");

  return (
    <div className="relative w-[76px] h-[76px]">
      <div className="w-full h-full ">
        {" "}
        {CHARS.map((char, index) => (
          <span
            key={index}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transformOrigin: "0 -20px", // Made radius smaller
              transform: `rotate(${index * (360 / CHARS.length)}deg)`,
              display: "inline-block",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CircularText;
